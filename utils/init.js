
const welcome = require('cli-welcome');
const pkg = require('../package.json');
const unhandled = require('cli-handle-unhandled');




module.exports = ({clear = true}) => {
    unhandled();
    welcome({
        title: `build-node-cli`,
        tagLine: `By Debapriya Majumder`,
        description : pkg.description,
        bgColor: `#FADC00`,
        color: `#000000`,
        bold: true,
        version: pkg.version,
        clear
    });
}


