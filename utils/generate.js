const execa = require('execa');
const ora = require('ora');
const path = require('path');
const copy = require('copy-template-dir');
const alert = require('terminal-alerts');
const { green : g , dim : d ,yellow : y} = require('chalk');

const spinner = ora({text:``});
const questions = require('./questions');

module.exports = async () => {
    const vars = await questions();
    const outDir = vars.name;
    const inDirPath = path.join(__dirname,`../templates`);
    const outDirPath = path.join(process.cwd(), outDir );

    copy(inDirPath,outDirPath,vars, async (err, createdfiles) =>{
        if(err) throw err;

        console.log(d(`Creating fils in ${g(`./${outDir}`)} directory\n`));

        createdfiles.forEach(file => {
            console.log(`${g(`Created`)} ${file}`);
        });
        
        console.log();
        spinner.start(`${y(`DEPENDENCIES`)} installing... \n\n ${d(`It may take a moment`)}`);
        process.chdir(outDirPath);
        const pkgs = [
            `meow@9.0.0`,
            `cli-meow-help`,
            `terminal-alerts`,
            `cli-handle-unhandled`,
            `cli-welcome`
        ];
        await execa(`npm`,[`install`,...pkgs]);
        await execa(`npm`,[`dedupe`]);
        spinner.succeed(`${g(`DEPENDENCIES`)} installed`);

        alert({
            type : `success`,
            name : `All Done!`,
            msg : `\n\n Created ${createdfiles.length} files in ${d(`./${outDir}`)} directory`

        })

    });
}