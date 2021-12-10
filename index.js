#!/usr/bin/env node

const path = require('path');
const copy = require('copy-template-dir');


const init = require('./utils/init');

(async ()=>{

    init();
    // const vars = {
    //     name
    // }
    // const outDir = vars.name;
    // const inDirPath = path.join(__dirname,`templates`);
    // const outDirPath = path.join(process.cwd(), outDir );

    // copy(inDirPath,outDirPath,vars, (err, createdfiles) =>{
    //     if(err) throw err;
    //     createdfiles.forEach(file => {
            
    //     });
    // })

})();
