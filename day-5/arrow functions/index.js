// arrow functions = a concise way to write function expression .good for simple functions that you 
//  use only once (parameter) => some code


const hello = (name,age) => {console.log(`hello ${name}`);
                 console.log(`your age is ${age}`)}
hello("loki",21); 



// example -2 

setTimeout(() => console.log("hello bro"),5000) 


// example - 3

const numbers = [2,5,6,8,9];

const squares = (element) => {
    console.log(element);
}

numbers.map(squares);