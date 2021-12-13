const ask = require('./ask');


module.exports = async () => {
    const name = await ask({ name:`name`, message: `CLI name ?`, hint: `(kebab-case only)` });
    const command = await ask({ name:`command`, message: `CLI command ?`, hint: `(Optional : if command is different from CLI name)` });
    const description = await ask({name:`description`, message: `CLI description ?` });
    const version = await ask({name:`version`, message: `version ?`, initial: `0.0.1` });
    const license = await ask({name:`license`, message: `License ?`, initial: `UNLICENSED` });
    const authorName = await ask({name:`authorName`, message: `Author name ?` });
    const authorEmail = await ask({name:`authorEmail`, message: `Author email ?` });


    const vars = {
        name,
        command: command ? command : name,
        description,
        version,
        license,
        authorName,
        authorEmail
    }

    return vars;
}