// use of .then()
const fs = require('fs');

function kiratsReadFile(){
    return new Promise(function(resolve){
        fs.readFile("a.txt", "utf-8", function(err, data){
            resolve(data);
        })
    })
}

function onDone(data) {
    console.log(data)
}
kiratsReadFile().then(onDone)

// second example: #Promises
function kiratsAsyncFunction(){
    let p = new Promise(function(resolve){
        resolve("Hi there!")
    });
    return p;
}
function main1(){
    kiratsAsyncFunction().then(function(value){
        console.log(value);
    });
}

main1();


// async:
function himanshuAsyncFunction(){
    let p = new Promise(function(resolve){
        resolve("umm! there!!")
    });
    return p;
}
async function main2(){
    const value = await himanshuAsyncFunction();
    console.log(value); 
    // 'await' holds himanshu... function 
    // until the promise get resolved;
}
main2();