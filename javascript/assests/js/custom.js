console.log(typeof 'ayush')

let javaScriptDemo = false;
console.log(javaScriptDemo)

const presentYear = 2022 ;
const ayush = presentYear - 1997;
const ayushi = presentYear - 1998;
console.log(ayush * 2, ayushi / 2);

// test first 
// calculating and comparing BMI of two person

//BMI = mass / height **2 = mass /  (height * height). (mass will be in kg and height in meter).

const storeMass = 95 ;
const storeHeight = 1.88 ;
const johnMass = 85 ;
const johnHeight = 1.76 ;

const storeBmi = storeMass / storeHeight ** 2;
console.log(storeMass);

const johnBmi = storeMass / (johnHeight * johnHeight);
console.log(johnBmi);

const storeHeigherBMI =  storeBmi > johnBmi;
console.log(storeHeigherBMI);

//strings and Template Literals

const firstName = "jonas";
const job = "developer";
const birthyear = "1997";
const year = 2022;

const description = "I' am " + firstName + " a " + job + " with a age of " + (year - birthyear);
console.log(description);

const descriptionNew = `I am  ${firstName}` ;
console.log(descriptionNew);

//multiple line strings

console.log(`multiple \n\
line \n\
string`);

console.log(`multiple
line
string`);

// if else 

const age = 17;
const requiredAge = 18;

if (age >= requiredAge){
    console.log(`you can start driving`);
}
else{
    const yearsLeft = requiredAge - age;
    console.log(`years left ${yearsLeft}`);
}

//typeconversion and typecoercion

// 1. typeconversion : when we manually convert one type to another. 
// 2. typecoercion : when javascript automatically convert one type to another.

const  birthYearTest = '1991';
console.log(Number(birthYearTest), birthYearTest);
console.log(Number(birthYearTest) + requiredAge);

console.log(String(23) + birthYearTest + ` is the number`);

//2. typecoercion

console.log(`my number is ` + 23);
console.log(23 + 42);
console.log(`423` - `42` - 3);

//falsy values
// there are 5 falsy values :- 0, '' , undefined , null , NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('jonas'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 0;  //zero is falsy value soo we get the else answer
if (money){
    console.log('dont have'); 
}
else{
    console.log('you should have a job');
}


let height; // kyoki height ne bu default wale 0 li hai or 0 falsy value hai
if (height){
    console.log('height is defined');
}
else{
    console.log('height is undefined');
}


// The conditonary operator (ternary) operator

const newAge = 23;
newAge >= 18 ? console.log('i love wine') : console.log('i drink water'); 

// short form of ternary opertor 

const drink = newAge >= 18 ? 'wine' : 'water' ;
console.log(drink);

function colorChange(){
    document.getElementById('color-box').style.cssText =' background-color: red; height: 200px; width: 200px; margin: auto; border: 1px solid #000; ' ;
}
function backgroundImage(){
    document.getElementById('color-box').style.cssText = 'background-image : url(./assests/img/img.jpg); height:200px; width: 200px; border: 1px solid #000; margin:auto; background-size: contain;';
}
function borderChange(){
    document.getElementById('borderChange').parentElement.style.cssText = 'background-color: blue; height:200px; width: 200px; border: 1px solid red; margin:auto; background-size: contain;';
}
function inputQuote(){
    document.getElementById('new-quote').textContent ='my name is ayush';
}
function inputQuoteNew(){
    document.getElementByClassName('new-class').textContent ='called by class';
}


// functions

let functionVaribale= newFunction();
function newFunction(){
    console.log('this is my new function');
}
 //function declearation
let variable1 = function1(4,4);
function function1(a,b){
    return a * b;
}
console.log(variable1);


//function expression
let variable2 = function (para1, para2) 
{
    return para1 + para2;
}

let result = variable2(2,2);
console.log(result);

//arrow function
//here birthyear work as a parameter
const variable3 = birthyear => 2037 - birthyear;
const newAge1 = variable3(1991);
console.log(newAge1);

// arrow function with one parameter with multiple line of code
const yearsUnitRetirement = birthyear => {
    const age = 2037 - birthyear;
    const retirement = 65 - age;
    return retirement;
}
console.log(yearsUnitRetirement(1991));

//arrow function with multiple parameter with multiple line of code
const yearsUnitRetirementNew = (birthyear , birthName) => 
{
    const age = 2037 - birthyear;
    const retirement = 65 - age;
    return `${birthName} retire in ${retirement} year`;
}
console.log(yearsUnitRetirementNew(1991, 'ayush'));

//function under function

const cutPieces = function(fruit){
    return fruit * 4;
}
const finalPieces = function(totalApplePieces, totalOrangePieces){
    return totalApplePieces + totalOrangePieces;
}
const fruitProcessor = function (apple,oranges){
    const applePieces = cutPieces(apple);
    const orangePieces = cutPieces(oranges);
    const totalPieces = finalPieces(applePieces, orangePieces);

    const juice = `juice with ${applePieces} pieces of apple and ${orangePieces } pices of orange. total pieces are ${totalPieces}`;
    return juice; 
}

console.log(fruitProcessor(2,3));


function myNewFunction(parameter1, parameter2){
    innerFun = parameter1 * parameter2;
    console.log(innerFun);
    return innerFun;

}
const myNewdata = myNewFunction(5, 5);
console.log(myNewdata);

//array 

const jonas = ['firstname', 'lastname',5-4];
console.log(jonas);
console.log(jonas.lenght);
console.log(jonas[1]);
const jay = ['ayush', 'saxena', jonas, 88-45];
console.log(jay);

//methord of array

const friends =['ayush', 'akshay' , 'prince'];
friends.push('jay');
console.log(friends);