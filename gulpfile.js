require('ts-node').register({
    project: './script/tsconfig.json'
});

const {buildLess} = require('./script/gulpfile');
const {buildLib} = require('./script/buildLib')

module.exports = {
    buildLess,
    buildLib
}