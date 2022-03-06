import { marked } from 'marked'
import Prism from "./prism-angular";

const render = new marked.Renderer();

let oldRenderHead = render.heading;
render.heading = function (text, level, raw, slugger) {
    return oldRenderHead.call(this, text, level, raw, slugger)
}

// let oldTable = render.table;
// render.table = function (header, body): string {
//   return oldTable.call(this, this, render, header, body)
// }

marked.setOptions({
    highlight: (code, lang, call) => {
        const language = Prism.languages[lang] || Prism.languages.autoit;
        return Prism.highlight(code, language);
    },
    renderer: render
})

export default marked