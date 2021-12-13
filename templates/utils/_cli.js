
const meow = require('meow');
const meowHelp = require('cli-meow-help');

const flags = {
    clear : {
        type : 'boolean',
        default : true,
        alias : 'c',
        desc : `Clear the console`
    },
    debug : {
        type : 'boolean',
        default : true,
        alias : 'd',
        desc : `Print debug info`
    },
    version : {
        type : 'boolean',
        alias : 'v',
        desc : `Print cli version`
    }
};

const commands = {
    help : {
        desc : `Print help info`
    }
};

const helpText = meowHelp({
    name : `{{command}}`,
    flags,
    commands
});


const options = {
    description : false,
    hardRejection : false,
    flags
}

module.exports = meow(helpText,options);

