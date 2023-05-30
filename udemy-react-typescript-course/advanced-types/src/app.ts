type Admin = {
    name: string;
    privileges: string[];
};

type Employee = {
    name: string;
    startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
    name: 'Boyan',
    privileges: ['software-dev'],
    startDate: new Date()
};

//With interface
interface Admin2 {
    name: string;
    privileges: string[];
}

interface Employee2 {
    name: string;
    startDate: Date;
}

interface ElevatedEmployee2 extends Admin2, Employee2 {}

type Combinable = string | number;

type Numeric = number | boolean;

type Universal = Combinable | Numeric;

function add(a: Combinable, b: Combinable) {
    if (typeof a === 'string' || typeof b === 'string') { //type guard
        return a.toString() + b.toString();
    }
    return a + b;
}

type UnkownEmployee = Employee | Admin

function printEmplyeeInformation(emp:UnkownEmployee) {
    console.log('Name');
    
}