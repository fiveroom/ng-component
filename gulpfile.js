require('ts-node').register({
    project: './script/tsconfig.json'
});

const {buildLess} = require('./script/gulpfile');
const {buildProject} = require('./script/buildLib')
const {series} = require("gulp");
const del = require("del");
const buildConfig = require('./script/build.config')

const clean = () => {
    return  del([buildConfig.default.publishDir])
}

module.exports = {
    buildLess,
    buildLib: series(clean, buildProject, buildLess)
}