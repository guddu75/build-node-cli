#!/usr/bin/env node

const path = require('path');
const copy = require('copy-template-dir');
const alert = require('terminal-alerts');
const { green : g , dim : d } = require('chalk');


const init = require('./utils/init');
const ask = require('./utils/ask');

(async ()=>{

    init();

    const name = await ask({message : `CLI name ?`, hint : `(kebab-case only)`});
    const command = await ask({message : `CLI command ?`, hint : `(Optional : if command is different from CLI name)`});
    const description = await ask({message : `CLI description ?`});
    const version = await ask({message : `version ?`, initial : `0.0.1`});
    const license = await ask({message : `License ?`, initial : `UNLICENSED`});
    const authorName = await ask({message : `Author name ?`});
    const authorEmail = await ask({message : `Author email ?`});


    const vars = {
        name ,
        command : command ? command : name ,
        description,
        version,
        license,
        authorName,
        authorEmail
    }
    const outDir = vars.name;
    const inDirPath = path.join(__dirname,`templates`);
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

    })

})();
