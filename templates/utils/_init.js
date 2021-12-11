
const welcome = require('cli-welcome');
const pkg = require('../package.json');
const unhandled = require('cli-handle-unhandled');




module.exports = ({clear}) => {
    unhandled();
    welcome({
        title: `{{name}}`,
        tagLine: `By {{authorName}}`,
        description : pkg.description,
        bgColor: `#FADC00`,
        color: `#000000`,
        bold: true,
        version: pkg.version,
        clear
    });
}


