const names: Array<string> = []; //string
names.push('Boyan');
names.push('Deivid');
names.push('Ivo');
//Can do string operation on this arr now:
names[0].toLowerCase(); //Have all the string methods atached

// const promise: Promise<string> = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('This is done!!!')
//     }, 2000)

//     promise.then((data) => data.split(''))
//     if (!resolve) {
//         console.log(reject);
//     }
// })

//Working with generic functions:
function merge<T extends object, U>(objA: T, objB: U) {
    return Object.assign(objA, objB);
}

// console.log(merge({ firstName: 'Boyan' }, { age: 29 }));

const mergedObj = merge({ firstName: 'David', hobbies: ['Eating, Sleeping'] }, { age: 23 });
// console.log(mergedObj.hobbies);

function extractAndConvert<T extends object, U extends keyof T>(obj:T, key: U) {
    return 'Value of ' + obj[key]
}

const personOne = {
    name: 'Boyan',
    age: 29,
    degree: true,
    profesion: 'software engeener trainee'
}

console.log(extractAndConvert(personOne, 'age'))