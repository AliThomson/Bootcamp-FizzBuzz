const prompt = require('prompt-sync')({sigint: true});

const upperLimit = prompt('How high shall we go?');
const rules = prompt('What rules shall we implement?')
const rulesArray = rules.split(",");

function isDivisbleBy(n,divisor) {
    return n % divisor === 0;
}
for (let i = 1; i<=Number(upperLimit); i++){
    let outputArr = [];
    let fezz = "";

    if (rulesArray.includes('3')) {
        if (isDivisbleBy(i, 3)) {
            outputArr.push("Fizz");
        }
    }
    if (rulesArray.includes('13')) {
        if (isDivisbleBy(i, 13)) {
            outputArr.push("Fezz");
            fezz = "Fezz";
        }
    }
    if (rulesArray.includes('5')) {
        if (isDivisbleBy(i,5)) {
            outputArr.push("Buzz");
        }
    }
    if (rulesArray.includes('7')) {
        if (isDivisbleBy(i,7)) {
            outputArr.push("Bang");
        }
    }
    if (rulesArray.includes('11')) {
        if (isDivisbleBy(i,11)) {
            outputArr = ["Bong"];
            if (fezz) {
                outputArr.unshift("Fezz");
            }
        }
    }

    if (rulesArray.includes('17')) {
            if (isDivisbleBy(i,17)) {
                outputArr.reverse();
            }
        }
    if (outputArr.length === 0) {
        outputArr = [i];
    }
    let strResult = outputArr.toString();
    strResult = strResult.replace(/,/g, '');
    console.log(strResult);
}