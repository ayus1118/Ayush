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