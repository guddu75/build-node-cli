const alert = require('terminal-alerts');

module.exports = (info) => {
    alert({
        type : `warning`,
        name : `DEBUG LOG`,
        msg : ``
    })

    console.log(info);
    console.log();
};