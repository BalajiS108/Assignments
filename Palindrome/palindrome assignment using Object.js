/**
 * PS:-- Largest Palindrome in a given string
- All Palindrome in a string

Ex - "Hello Mam, how are you. Madam, do you know racecar?
1- "racecar"
2- ["mam", "madam", "racecar"]

*1.Take the input as string
 2.convert all words into lowercase
 3.check the whether individual words are palindrome  using two loops
 4.return words those are palindrome
 5.Find the largest one from the returned array
 */

const palindromeInside = (word) => {
  for (let i = 0; i < word.length / 2; i++) {
    if (!(word[i] === word[word.length - 1 - i])) {
      return false;
    }
  }
  return true;
};

const palindrome = (str) => {
  const str1 = str
    .toLowerCase()
    .replace(/[^a-zA-Z ]/g, '')
    .trim()
    .split(' ');
  const obj = {};
  for (let i = 0; i < str1.length; i++) {
    if (!obj.hasOwnProperty(str1[i])) {
      obj[str1[i]] = palindromeInside(str1[i]);
    }
  }
  // console.log(obj);
  const arr = [];
  let max = '';
  const key = Object.keys(obj);
  // console.log(key.length);
  for (let i = 0; i < key.length; i++) {
    if (obj.hasOwnProperty(key[i])) {
      // console.log(obj[key[i]]);
      if (obj[key[i]] === true) {
        arr.push(key[i]);
        if (max.length < key.length) {
          max = key[i];
        }
      }
    }
  }
  console.log(arr);
  console.log(max);
};
palindrome('Hello Mam, how are you. Madam, do you know racecar?');
