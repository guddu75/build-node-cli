const path = require('path');
const copy = require('copy-template-dir');
const alert = require('terminal-alerts');
const { green : g , dim : d } = require('chalk');

const questions = require('./questions');

module.exports = async () => {
    const vars = await questions();
    const outDir = vars.name;
    const inDirPath = path.join(__dirname,`../templates`);
    const outDirPath = path.join(process.cwd(), outDir );

    copy(inDirPath,outDirPath,vars, (err, createdfiles) =>{
        if(err) throw err;

        console.log(d(`Creating fils in ${g(`./${outDir}`)} directory\n`));

        createdfiles.forEach(file => {
            console.log(`${g(`Created`)} ${file}`);
        });

        alert({
            type : `success`,
            name : `All Done!`,
            msg : `\n\n Created ${createdfiles.length} files in ${d(`./${outDir}`)} directory`

        })

    });
}