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