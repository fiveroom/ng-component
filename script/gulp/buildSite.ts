import { dest, src } from "gulp";

import buildConfig from "../../build.config";
import { join, resolve } from "path";
import * as fs from "fs";
import * as YFM from "yaml-front-matter";
import { parseMd } from "../site/tool/remark-doc";
import marked  from "../site/tool/marked";
import { getComponentName } from "../site/tool/getComponentName";


const template = {
    "component": fs.readFileSync(resolve(__dirname, '../site/template/component-template')).toString(),
    "html": fs.readFileSync(resolve(__dirname, '../site/template/html-template')).toString(),
    "module": fs.readFileSync(resolve(__dirname, '../site/template/module-template')).toString()
}

export const moveComponent = () => {
    return  src([join(buildConfig.components, '/!(demo|doc|style)/!(test|public_api).ts')], {
        base: buildConfig.components
    })
        .pipe(dest(join(buildConfig.siteDir, 'src', 'app')))
}

function addContainer(content: string) {
    return `
        <section class="markdown-body">
            ${content}
        </section>
    `
}

function replaceParentheses(content: string) {
    return  content.replace(/{/g, '&#123;').replace(/}/g, '&#125;')
}

export const generateDoc = (done) => {
    const ignore = ["style"]
    const dirs = fs.readdirSync(buildConfig.components);
    const app = join(buildConfig.siteDir, 'src', 'app');
    dirs.forEach(componentName => {
        let componentDir = join(buildConfig.components, componentName);
        if(!ignore.includes(componentName) && fs.statSync(componentDir).isDirectory()){
            let docDir = join(componentDir, 'doc', 'index.md');
            if(fs.existsSync(docDir)){
                const docName = `${componentName}-doc`;
                const fileName = `${componentName}.doc`
                let className = getComponentName(docName) + 'Component';
                let content = {
                    doc: {},
                    demo: {}
                };
                let docContent = fs.readFileSync(join(componentDir, 'doc', 'index.md'));
                let data = YFM.loadFront(docContent);
                let {head, api} = parseMd(data.__content);
                // @ts-ignore
                content.doc.html = template.html
                    .replace('{{head}}', replaceParentheses(addContainer(marked(head))))
                    .replace("{{api}}", replaceParentheses(addContainer(marked(api))));
                // @ts-ignore
                content.doc.ts = template.component
                    .replace('{{selector}}', `five-${componentName}-doc`)
                    .replace('{{className}}', className)
                    .replace('{{templateUrl}}', `./${fileName}.component.html`);

                fs.mkdirSync(join(app, docName));
                // @ts-ignore
                fs.writeFileSync(join(app, docName, `${fileName}.component.html`), content.doc.html);
                // @ts-ignore
                fs.writeFileSync(join(app, docName, `${fileName}.component.ts`), content.doc.ts);
            }

        }
    })
    done()
}