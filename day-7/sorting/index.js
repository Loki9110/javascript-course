//  sort() = method used to sort elements of an array in place.
//   sort elements as strings in lexicographic order ,not alphabetical
//    lexicographic = (alphabet + numbers + symbols) as strings


let fruits = ["apple","orange","banana","coconut","pineapple"];

fruits.sort();
console.log(fruits);

let  numbers = [54,87,32,654,3,34];
numbers.sort((a,b) => b-a);
console.log(numbers);



// example - 2

const people = [{ name : "spongebob" ,age : 25, gpa : 3.0}
                { name : "patrik"  ,age: 33 , gpa :  2.0}
                { name : "squidward" ,age : 42,gpa : 5.0}
                { name : "sandy" ,age : 22, gpa : 3.4}
]

people.sort((a,b) => a.age - b.age);

console.log(people);    