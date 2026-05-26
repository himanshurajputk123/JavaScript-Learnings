// async v/s sync function
// 01 setTimeout() ==> delay a function by setted time
// 02 fs.readFile() ==> Reads file
// these are two globally provided function by JS
// sync => runs on a single thread after only one task completed
// async => runs on a single thread but delegate its task to others and handle more than one tasks at a time
 
function findSum(n) {
let ans = 0;
for (let i= 0; i<n; i++) {
ans += i;
}
return ans;
}
function findSumTill100() {
  console.log("Hey!")
return findSum(100);
}

setTimeout(findSumTill100, 1000) // delegating the task by delaying fn findSumTill100 by 1sec 
console. log("hello world");


// fs.readFile()

const fs = require("fs");
// filesystem module

fs.readFile("a.txt", "utf-8", function(err, data) {
console. log(data);
})

console.log("hi there");
let a = 0;
// takes very long, longer than the file read
for (let i= 0; i<100000000; i++) {
a++;
}
console.log("hi there 2")