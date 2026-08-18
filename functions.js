function even(number) {
    if (number % 2 === 0 ){
        console.log(number, "is an even number");
        
    } else {
        console.log(number, "is an odd number");

    }
}

for(let i = 0; i<=10; i++){
    even(i);
}


function largest(num1, num2, num3) {
    let greatestNum = 0;
    if (num1 > num2) {
        if (num1 > num3) {
            greatestNum = num1;
            // console.log(num1, "is the greatest number");
        }
        else {
            greatestNum = num3;
            // console.log(num3, "is the greatest number");
        }
    }
    else if (num2 > num3) {
        greatestNum = num2;
        // console.log(num2, "is the greatest number");
    }
    else{
        greatestNum = num3;
        // console.log(num3, "is the greatest number");
    }

    console.log("The greatest among",":", num1,",", num2,",", num3, "is", greatestNum)
}

largest(12,34,55);
largest(56,300,9);
largest(400,150,35);


function reverseString(string) {
    let reversedstring = "";
    for (let i = string.length - 1; i >= 0; i--) {
        reversedstring += string[i];
    }
    console.log("The reversed string of",string,"is", reversedstring);
}


reverseString("school");
reverseString("intern");
reverseString("career");
reverseString("doctor");




