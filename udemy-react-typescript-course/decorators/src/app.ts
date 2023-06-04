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

function Log(target: any, propertyName: string | Symbol) {
    console.log('Property decorator!');
    console.log(target, propertyName);
}

function Log2(target: any, name: string | Symbol, descriptor: PropertyDescriptor) {
    console.log('Accessor decorator!');
    console.log(target);
    console.log(name);
    console.log(descriptor);
}

function Log3(target: any, name: string | Symbol, descriptor: PropertyDescriptor) {
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
            throw new Error('Invalid price - should be negative!');
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

function Authobind(_: any, _2: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    const adjDescriptor: PropertyDescriptor = {
        configurable: true,
        enumerable: false,
        get() {
            const boundFn = originalMethod.bind(this);
            return boundFn
        }
    };
    return adjDescriptor
}

class Printer {
    message = 'This works!';

    @Authobind
    showMessage() {
        console.log(this.message);
    }
}

const p = new Printer();

const btn = document.querySelector('button');
btn?.addEventListener('click', p.showMessage);

// Validation with Decorators section
function Required(params:type) {
    
}

function PositiveNumber(params:type) {
    
}

function validate(obj:object) {
    
}

class Course {
    title: string;
    price: number

    constructor(t: string, p: number) {
        this.title = t;
        this.price = p
    }
}

const formEl = document.querySelector('form')

formEl?.addEventListener('submit', e => {
    e.preventDefault()
    const titleEl = document.getElementById('title') as HTMLInputElement
    const priceEl = document.getElementById('price') as HTMLInputElement

    const title = titleEl. value
    const price = +priceEl. value

    const createdCourse = new Course(title, price)
    console.log(createdCourse);
})
