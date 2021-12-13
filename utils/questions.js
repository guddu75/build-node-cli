const ask = require('./ask');


module.exports = async () => {
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

    return vars;
}