"use strict";
// Welcome To TypeScript!
// Watching File Changes Detected Commend (tsc -w)
// Typescript Initialize (tsc init, tsc)
var country = 'A Beautiful CountryBangladesh, Dhaka!';
//console.log(country);
//------------Learn Basics Types-----------
// Function Sum
function sum(one, two) {
    return one + two;
}
var sumResult = sum(20, 43);
console.log(sumResult);
// Array List
var foods = ['Apple', 'Banana', 'Candy', 'Bran', 'Clove', 'Dijon'];
foods.push('Door');
console.log(foods);
// Mixed Array, Number, String, Boolean, Object All Array.
var mixedArray = ['Apple', 'Banana', 23, 81, false, true, { name: 'Sajjad Sadiq' }];
console.log(mixedArray);
// Object || intelligent || Human Error Small ||
// jai function ta ba jai object ta age declaration korbo oitai tar syntax dore nibe.
var friendsInfo = {
    name: 'Sabbir Hasan',
    age: 24,
    school: 'oxford international school',
    days: true,
};
//friendsInfo.country = 'Bangladesh' // Syntax age declaration kore nai
//--------- Lean Explicit & Union Types -------------
