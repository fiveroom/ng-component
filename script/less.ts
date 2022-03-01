import * as less from "gulp-less";
import { src, dest } from "gulp";

import buildConfig from "./build.config";
import { join } from "path";


const buildLess = () => {
    return src(join(buildConfig.components, '**/*.less'))
        .pipe(less())
        .pipe(dest(join(buildConfig.components, 'style')))
}

export {
    buildLess
}