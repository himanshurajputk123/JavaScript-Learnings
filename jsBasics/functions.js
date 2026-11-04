// this is function expression
let sayHi = () =>{
    console.log("Said Hi!");
}
sayHi();

add(2, 4); // this will run too due to "Hoisting"

function add(num1, num2){
    console.log(num1+num2);
}

function multiply(...args) {
    return args.reduce((accumulator, currentValue) => accumulator * currentValue, 1);
}
console.log(multiply(1,3,5));

function multiply(multiplier, ...numbers){
    return numbers.map(number => number * multiplier);
}
console.log(multiply(2, 1,2,3,4,5));

// Default parameters
function writeCode(language = 'Java'){
    console.log(`My programming language is ${language}`);
}
writeCode('Javascript');
writeCode('C++');
writeCode();

//Very important
// Getters and Setters



// Try-Catch block
const course = {
    name: 'JavaScript for Beginners',
    duration: '3 hours',
    get details() {
        return `${this.name} is ${this.duration}`;
    },
    set details(value) {
        if (typeof value !== 'string') {
            throw new Error(`Value, ${value} is not a string`);
        }

        let parts = value.split(' is ');
        this.name = parts[0];
        this.duration = parts[1];
    }
};

try{
    course.details = 42;
} catch (e) {
    console.log(`Caught an error: ${e.message}`);
}
