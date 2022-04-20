const prompt = require('prompt-sync')({sigint: true});

const upperLimit = prompt('How high shall we go?');

function isDivisbleBy(n,divisor) {
    return n % divisor === 0;
}
for (let i = 1; i<=Number(upperLimit); i++){
    let outputArr = [];
    let fezz = "";
    if (isDivisbleBy(i,3)) {
        outputArr.push("Fizz");
    }
    if (isDivisbleBy(i,13)) {
        outputArr.push("Fezz");
        fezz = "Fezz";
    }
    if (isDivisbleBy(i,5)) {
        outputArr.push("Buzz");
    }
    if (isDivisbleBy(i,7)) {
        outputArr.push("Bang");
    }
    if (isDivisbleBy(i,11)) {
        outputArr= [fezz + "Bong"];
    }

    if (isDivisbleBy(i,17)) {
        outputArr.reverse();
    }
    if (outputArr.length === 0) {
        outputArr = [i];
    }
    let strResult = outputArr.toString();
    strResult = strResult.replace(/,/g, '');
    console.log(strResult);
}