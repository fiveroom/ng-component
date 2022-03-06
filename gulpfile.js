require('ts-node').register({
    project: './script/gulp/tsconfig.json'
});

const {buildLess} = require('./script/gulp/gulpfile');
const {buildProject} = require('./script/gulp/buildLib')
const {moveComponent, generateDoc} = require('./script/gulp/buildSite')
const {series} = require("gulp");
const del = require("del");
const buildConfig = require('./build.config')

const clean = () => {
    return  del([buildConfig.default.publishDir])
}

module.exports = {
    buildLess,
    buildLib: series(clean, buildProject, buildLess),
    moveComponent,
    generateDoc
}