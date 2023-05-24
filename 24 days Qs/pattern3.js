let revtri = function (n) {
  if (n <= 0 || n >= 10) {
    alert("please enter a valid number");
  } else {
    let b = "";
    let a = "";
    let c = " ";
    let d = " ";
    for (let j = 1; j <= n; j++) {
      b = b + "*" + c;
    }
    a = b + "\n";
    b = "";
    for (let i = 1; i <= n - 1; i++) {
      for (let j = 1; j <= n - 1; j++) {
        b = b + "*" + c;
      }
      a = a + d + b + "\n";
      b = "";
      n = n - 1;
      d = d + d;
    }
    return a;
  }
};
console.log(revtri(5));
