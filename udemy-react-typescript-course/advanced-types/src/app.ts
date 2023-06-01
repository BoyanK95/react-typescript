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
    if (typeof a === 'string' || typeof b === 'string') {
        //type guard
        return a.toString() + b.toString();
    }
    return a + b;
}

type UnkownEmployee = Employee | Admin;

function printEmplyeeInformation(emp: UnkownEmployee) {
    console.log('Name: ', emp.name);
    if ('privileges' in emp) {
        console.log('Privileges: ' + emp.privileges);
    }
    if ('startDate' in emp) {
        console.log('Start date: ' + emp.startDate);
    }
}

printEmplyeeInformation(e1);
printEmplyeeInformation({ name: 'Dinyo', privileges: ['full stack dev'] });

class Car {
    drive() {
        console.log('Driving...');
    }
}

class Truck {
    drive() {
        console.log('Driving truck');
    }

    loadCargo(amount: number) {
        console.log(`Loading cargoo...  Cargo weight is ${amount} kg.`);
    }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(1000);
    }
}

interface Bird {
    type: 'bird';
    flyingSpeed: number;
}

interface Hourse {
    type: 'horse'
    runningSpeed: number;
}

type Animal = Bird | Hourse;

function moveAnimal(animal: Animal) {
    let speed;
    switch (animal.type) {
        case 'bird':
            speed = animal.flyingSpeed;
            break;
        case 'horse':
            speed = animal.runningSpeed;
            break;
    }
    console.log('Moving at speed: ' + speed);
}

moveAnimal({type: 'bird', flyingSpeed: 55})