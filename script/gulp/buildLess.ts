import { join } from "path";

import { src, dest } from "gulp";
import * as less from "gulp-less";
import * as postcss from "gulp-postcss";
import * as postcssPreset from "postcss-preset-env";
import * as cssnano from "cssnano";
import * as rename from 'gulp-rename'

import buildConfig from "../../build.config";


const lessPath = [join(buildConfig.components, 'components*.less'), join(buildConfig.components, '**/entry.less')];

const renameMatch = (min = true) => {
    return (path: rename.ParsedPath) => {
        path.basename = path.basename.replace('components', buildConfig.packageName);
        path.extname = (min ? '.min' : '') + '.css';
    }
}

const compileLess = () => {
    return src(lessPath)
        .pipe(less())
        .pipe(postcss([postcssPreset(), cssnano()]))
        .pipe(rename(renameMatch(true)))
        .pipe(dest(buildConfig.publishDir))
}

export const buildLess = compileLess
