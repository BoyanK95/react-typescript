function Logger(logString: string) {
    return function (constructor: Function) {
        console.log(logString);
        console.log(constructor);
    }
}

function WithTemplade(template:string, hookId: string) {
    return function (_:Function) {
        const hookEl = document.getElementById(hookId)
        if (hookEl) {
            hookEl.innerHTML =  template
        }
    }
}



// @Logger('LOGGING - PERSON')
@WithTemplade('<h1>My template object</h1>', 'app')
class Person {
    name = 'Max';

    constructor(){
        console.log('Creating person obj!');
        
    }
}

const pers = new Person()

console.log(pers);
