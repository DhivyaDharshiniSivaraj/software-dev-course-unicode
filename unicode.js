
// Task 1
let inputString1 = "Code";
let firstCodePoint = inputString1.charCodeAt(0);
let thirdCodePoint = inputString1.charCodeAt(2);
console.log(`The first code point is ${firstCodePoint} and the third code point is ${thirdCodePoint}`);

// Task 2
let code = [74,97,118,97,83,99,114,105,112,116];
let wordFromCodePoints = String.fromCharCode(code[0])+String.fromCharCode(code[1])+String.fromCharCode(code[2])+String.fromCharCode(code[3])+String.fromCharCode(code[4])+String.fromCharCode(code[5])+String.fromCharCode(code[6])+String.fromCharCode(code[7])+String.fromCharCode(code[8])+String.fromCharCode(code[9]);
console.log(`The word is ${wordFromCodePoints}`);

// Task 3
let inputString2 = "Launch";
let codePoint1 = inputString2.charCodeAt(0);
let codePopint2 = inputString2.charCodeAt(5);

let str = "Launch";
let first = str.charCodeAt(0);
let last = str.charCodeAt(5);
let swappedString = String.fromCharCode(last) + str[1] + str[2] + str[3] + str[4] + String.fromCharCode(first);
console.log(`The swapped string is ${swappedString}`);


