function even(number) {
    
    if (number % 2 === 0 ){
        return number + " is an even number";
    } else {
        return number + " is not an even number";
    }
}
const prompt = require("prompt-sync")();
let number = Number(prompt("Enter number:"));
result1 = even(number)
console.log(result1)

function largest(num1, num2, num3) {

    if (num1 > num2) {
        if (num1 > num3) {
            return num1 + " is the largest number."
        }
        else {return num3 + " is the latgest number."}
    }
    else if (num2 > num3) {
        return num2 + " is the largest number."
    }
    else{return num3 + " is the largest number."}
}

const num1 = Number(prompt("Enter the first number: "))
const num2 = Number(prompt("Enter the second number: "))
const num3 = Number(prompt("Enter the third number: "))
result2 = largest(num1, num2 ,num3)
console.log(result2)

function reverseString(string) {
    let reversedstring = ""
    for (let i = string.length - 1; i >= 0; i--) {
        reversedstring += string[i];
    }
    return reversedstring
}

const string = prompt("Enter the string: ")
result3 = reverseString(string)
console.log(result3)



