// •	Reverse of a number
/**
 * Algorithm
 * take any input number n
 * use while loop having condition n>0
 * in while loop  find modulus first & then div it by 10
 * result=0;
 * sum=mod*pow(10,mod)
 * result=result+sum;
 *
 */

let num1 = 1234;
let sum = 0;
while (num1 > 0) {
  m = num1 % 10;
  num1 = parseInt(num1 / 10);
  sum = m + sum * 10;
}
console.log(sum);

let num = 1234;
let result = 0;
let str = "";
while (num > 0) {
  mod = num % 10;
  num = Math.floor(num / 10);
  str = str + mod;
}
console.log(Number(str)); //Converting string into number
