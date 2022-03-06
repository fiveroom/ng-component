import { join } from 'path'
import { cwd } from "process";

interface buildConfig {
    publishDir: string;
    components: string;
    packageName: string;
    siteDir: string;
}

function getConfig():buildConfig {
    let rootDir = cwd();
    return {
        publishDir: join(rootDir, 'publish'),
        components: join(rootDir, 'components'),
        packageName: 'component-angular',
        siteDir: join(rootDir, 'projects', 'site-doc')
    }
}

export default getConfig()