interface Person {
    name: string;
    age: number;

    greet(phrase: string): void;
}

let user1: Person;

user1 = {
    name: 'Max',
    age: 30,
    greet(phrase: string) {
        console.log(phrase + ' ' + this.name);
    }
};

user1.greet('Hi there - I am');

interface Greetable {
    name: string;

    greet(phrase: string): void;
}

let greetBG: Greetable;
 
class People implements Greetable {
  name: string;
  age: number;

  constructor(n:string, age: number) {
    this.name = n
    this.age = age
  }

  greet(phrase: string): void {
      console.log(phrase);
      
  }
}