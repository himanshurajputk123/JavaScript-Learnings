// use of objects is to store State and behaviour
// state is represented by key
// behaviour is represented by value
const dog = {
    name: 'Max',
    breed: 'Dachshund',
    age: 5,
    weightInKg: 20,
    //functions inside an object, called methods.
    eat: function(){ // anomynous function
        console.log("Chomp!");
    },
    bark(){ // another syntax
        // it a method
        console.log("Woof!");
    }
}


// A 'Factory Function' is a normal function 
// that creates and returns objects.
function getDog(name, breed, age, weightInKg){
    return{
        name,
        breed,
        age,
        weightInKg,
        eat(){
            console.log("Chomp!");
        },
        bark(){
            console.log("Woof");
        }
    }
}

const dog1 = getDog('Scala', 'Chocolate Lab', 2, 34);
const dog2 = getDog('Max', 'Dachshund', 5, 20);
const dog3 = getDog('Bruno', 'German Shepherd', 3, 30);

dog1.eat();
console.log(dog2);
dog3.bark();

// 'Constructor Function'
// these functions use 'this' keyword
// uses Pascal casing
// we'll be using 'new' keywords for initializing using constructor functions
function Dog(name, breed, age, weightInKg){
    this.name = name;
    this.breed = breed;
    this.age = age;
    this.weightInKg = weightInKg;

    this.eat = () =>{
        console.log(this.name + ': Chomp!');
    }
    this.bark = () =>{
        console.log(this.name + ': Woof!');
    }
}

const dog4 = new Dog('Simba', 'Protein', 4, 50);
console.log(dog4);

const student = {
    name: 'Himanshu',
    year: 2
};
// we can also add key-value outside the object
// in 2 ways 
student.enrollment = '25uics0551';
student['section'] = 'A';

console.log(student);
// deletion
delete student.section;
console.log(student);

// *Every objects in js have constructor* //
// will learn with time and practice
const person = {
    name:'Steve Roger'
};
let newObject = {};
let newObj = new Object();


// functions are objects in js
function add(num1, num2){
    return num1+num2;
}
const sum = add;
console.log(sum(3,5));

// passed by values and passed by reference
let a = 10;
let b = a;
a = 20;
console.log(a); // 20
console.log(b); // 10 passed by values

let c = {value: 20};
let d = c;
c.value = 100;
console.log(c); 
console.log(d);


// ================================== //
// IMPT //
// Properties of objects
const keys = Object.keys(student);
console.log(keys); // will prints all the keys

const values = Object.values(student);
console.log(values); // wil prints all the values

const entries = Object.entries(student);
console.log(entries); // will print in key-value pairs

// Iterating over the arrays returned by keys, objects, entries
// using for-of loop

// keys
for(const key of Object.keys(student)){
    console.log(key);
}
// values
for(const value of Object.values(student)){
    console.log(value);
}
// entries
for(const entry of Object.entries(student)){
    console.log(entry);
}


// Cloning an Object

