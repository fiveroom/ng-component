import { join } from "path";

import { src, dest, series } from "gulp";
import * as less from "gulp-less";
import * as postcss from "gulp-postcss";
import * as postcssPreset from "postcss-preset-env";
import * as cssnano from "cssnano";
import * as rename from 'gulp-rename'
import * as del from "del";

import buildConfig from "./build.config";


const clean = () => {
    return del([join(buildConfig.publishDir, 'components*.less')])
}

const compileLess = () => {
    let compress = false;
    let plugins = [postcssPreset(), compress ? cssnano() : null].filter(Boolean);
    let renameMatch = (path: rename.ParsedPath) => {
        path.basename = path.basename.replace('components', buildConfig.packageName);
        path.extname = '.css';
    }
    return src([join(buildConfig.components, 'components*.less')])
        .pipe(less())
        .pipe(postcss(plugins))
        .pipe(rename(renameMatch))
        .pipe(dest(join(buildConfig.publishDir, 'style')))
}

export const buildLess = series(clean, compileLess)
