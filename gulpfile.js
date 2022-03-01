require('ts-node').register({
    project: './script/tsconfig.json'
});

const { buildLess } = require('./script/gulpfile');

module.exports = {
    buildLess
}