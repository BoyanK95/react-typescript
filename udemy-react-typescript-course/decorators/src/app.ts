function Logger(logString: string) {
    return function (constructor: Function) {
        console.log(logString);
        console.log(constructor);
    };
}

function WithTemplade(template: string, hookId: string) {
    return function (_: Function) {
        const hookEl = document.getElementById(hookId);
        if (hookEl) {
            hookEl.innerHTML = template;
        }
    };
}

@Logger('LOGGING - PERSON')
@WithTemplade('<h1>My template object</h1>', 'app')
class Person {
    name = 'Max';

    constructor() {
        console.log('Creating person obj!');
    }
}

const pers = new Person();
console.log(pers);

function Log(target:any, propertyName: string | Symbol) {
    console.log('Property decorator!');
    console.log(target, propertyName);
    
}

function Log2(target:any, name: string | Symbol, descriptor: PropertyDescriptor) {
    console.log('Accessor decorator!');
    console.log(target);
    console.log(name);
    console.log(descriptor);
}

function Log3(target:any, name: string | Symbol, descriptor: PropertyDescriptor) {
    console.log('Method decorator!');
    console.log(target);
    console.log(name);
    console.log(descriptor);
}

class Product {
    @Log
    title: string;
    private _price: number;

    @Log2
    set price(val: number) {
        if (val > 0) {
            this._price = val;
        } else {
            throw new Error('Invalid price - should be negative!')
        }
    }

    constructor(t: string, p: number) {
        this.title = t;
        this._price = p;
    }

    @Log3
    getPriceWithTax(tax: number) {
        return this._price * (1 + tax);
    }
}


