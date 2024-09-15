// spread operator = ... allows an iterable such as an array or string to be expanded intp seperate elements(unpacks the elements)

let num = [1,2,3,4,5];
let f = Math.max(...num);
console.log(f); // Output: 5


let username = "lokesh kumar boora";
let w = [...username];
console.log(w); // Output: ['l', 'o', 'k', 'e', 's','h']


let fruit = ["apple","banana","watermelon"];
let vegetables = ["cabbage","broccoli","carrot"];
let all = [...fruit,...vegetables].join("-");
console.log(all);