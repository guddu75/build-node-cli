
const welcome = require('cli-welcome');
const pkg = require('../package.json');



module.exports = () => {
    welcome({
        title: `build-node-cli`,
        tagLine: `By Debapriya Majumder`,
        description : pkg.description,
        bgColor: `#FADC00`,
        color: `#000000`,
        bold: true,
        clear: true,
        version: pkg.version
    });
}


