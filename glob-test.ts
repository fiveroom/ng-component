const glob = require('glob');


glob('components/!(demo|doc|style)/!(index|test|public[-_]api).ts', {
}, (er, files) => {
    console.log(files)
})