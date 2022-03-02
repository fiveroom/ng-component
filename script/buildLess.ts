import { join } from "path";

import * as less from "gulp-less";
import { src, dest, series } from "gulp";
import * as postcss from "gulp-postcss";
import * as autoprefixer from "autoprefixer";
import * as postcssPreset from "postcss-preset-env";
import * as concat from 'gulp-concat'
import * as cssnano from "cssnano";
import * as rename from 'gulp-rename'
import * as del from "del";


import buildConfig from "./build.config";

const clean = () => {
    return del([buildConfig.publishDir])
}

const compileLess = () => {
    let compress = false;
    let plugins = [postcssPreset(), compress ? cssnano() : null].filter(Boolean);
    let lessGlob = [
        join(buildConfig.components, 'components*.less'),
    ];
    let renameMatch = (path: rename.ParsedPath) => {
        path.basename = path.basename.replace('components', buildConfig.packageName);
        path.extname = '.css';
    }
    return src(lessGlob)
        .pipe(less())
        .pipe(postcss(plugins))
        .pipe(rename(renameMatch))
        .pipe(dest(join(buildConfig.publishDir, 'style')))
}

export const buildLess = series(clean, compileLess)
