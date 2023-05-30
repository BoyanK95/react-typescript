const names : Array<string> = [] //string

//Can do string operation on this arr now:
names[0].toLowerCase()  //Have all the string methods atached 

const promise: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('This is done!!!')
    }, 2000)

    promise.then((data) => data.split(''))
    if (!resolve) {  
        console.log(reject);
    }
    
})