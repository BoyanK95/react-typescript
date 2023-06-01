"use strict";
const e1 = {
    name: 'Boyan',
    privileges: ['software-dev'],
    startDate: new Date()
};
function add(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
const resultNumber = add(1, 1);
const resultString = add('Tom', 'Jerry');
function printEmplyeeInformation(emp) {
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
    loadCargo(amount) {
        console.log(`Loading cargoo...  Cargo weight is ${amount} kg.`);
    }
}
const v1 = new Car();
const v2 = new Truck();
function useVehicle(vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(1000);
    }
}
function moveAnimal(animal) {
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
moveAnimal({ type: 'bird', flyingSpeed: 55 });
const paragraph = document.getElementById('message-output');
const inputEl = document.getElementById('user-input');
inputEl.value = 'Hi there !';
const errorBag = {
    email: 'Not  a valid email!',
    username: 'Must start with a capital character!'
};
//# sourceMappingURL=app.js.map