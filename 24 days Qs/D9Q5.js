// // •	Uppercase of each first letter of a words using Array map function
arr=["chant","hare","krishna","&","be","happy"];
const element=arr.map(function(arr1){
    l=arr1.length;
    console.log(arr1[0].toUpperCase()+ arr1.substr(1,l-1))
});



