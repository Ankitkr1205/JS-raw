// console.log("We are learning functions");

//What is functions

/*
1)A javascript function is a block of code 
designed to perform a particular task

2)A javascript function is executed when "something" invokes it(calls it)

3)A javascript function is defined with "function" keyword,
follwed by a name, followed by a parentheses

4)Function name is same as variable name

5)The  paretheses may include "Parameter" names separated by commas

6)The code to be executed by the functions , 
is placed inside curly brackets{}

7)Function "parameters" are listed inside the paretheses()
in function defination

8)Function "arguments" are the values recieved by the function 
when it is invoked or called

9)Inside the function, the argument(the parameter) behaves as 
local varible
*/

const num1 = 75;
const num2 = 71;
console.log("I am global", "num1", num1, "num2", num2);

function addAnyNumber(num1, num2) {
  console.log("I am local", "num1", num1, "num2", num2);
  return num1 * num2;
}

const result = addAnyNumber(2, 3); //function invoke or calling
console.log("Ans of multiply is :", result);
document.write("Ans of multiply is :", result);

function studentDetail() {
  const name1 = "Ankit";
  const age = 26;
  const developer = true;
  const myprofile = "My name is " + name1 + age + developer;
  return myprofile;
}

console.log("----------", studentDetail());
/*
PRACTISED BY DEEPAK
*/

console.log("main branch")
let num4 = 10;
let num5 = 5;

let sum = num4 + num5;
let difference = num4 - num5;
let product = num4 * num5;
let quotient = num4 / num5;

console.log("Sum:", sum);
console.log("Difference:", difference);
console.log("Product:", product);
console.log("Quotient:", quotient);
/*
2.FUNCTION
*/
let grade = 75;

if (grade >= 90) {
    console.log("A");
} else if (grade >= 80) {
    console.log("B");
} else if (grade >= 70) {
    console.log("C");
} else {
    console.log("F");
}

/*
3,fuction
*/
function NAMASTE(name) {
  console.log("Hello, " + name + "!");
}


NAMASTE("ANKIT BHAIYA");
