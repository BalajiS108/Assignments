// •	Reverse of a number using converting into string with or withour builtin methods

/**
 * Ex. 1234="1234"="4321"
 * Algorithm
 * take input any number
 * convert it into a string using toString()
 * take blank string & add each char of original srtring from end using for loop.
 */

let num = 1234;
let str = num.toString();
// console.log(str, typeof str);
l = str.length;
let str1 = [];
for (let i = l - 1; i >= 0; i--) {
  str1 = str1 + str[i];
}
// console.log(str1);

// Without using inbulit function for
//converting into string
let num1 = 1234;
let str2 = "";
let str3 = num1 + str2;
l1 = str3.length;
let str4 = "";
for (let j = l1 - 1; j >= 0; j--) {
  str4 = str4 + str3[j];
}
console.log(str4);
