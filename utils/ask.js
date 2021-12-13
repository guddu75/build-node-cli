const fs = require('fs');
const { Input } = require('enquirer');
const to = require('await-to-js').default;
const handleError = require('cli-handle-error');
const shouldCancel = require('cli-should-cancel');


module.exports = async ({name,message,hint,initial}) => {
    
    const [err,response] = await to(
        new Input({
            name,
            message,
            hint,
            initial,
            validate(value,state){
                if( state && state.name === `command`) return true;
                if( state && state.name === `name`){
                    if(fs.existsSync(value)){
                        return `Directory already exists ./${value}`;
                    }else{
                        return true;
                    }
                } 
                return !value ? `Please add a value` : true;
            }
        })
        .on(`cancel`,() => shouldCancel())
        .run()
    );
    
    handleError(`INPUT `, err);

    return response;

}