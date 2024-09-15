// variable = a container that stores a value

// 1. declaration   let x; 
// 2. assignment   x= 10;    
// both decl and assign together  let x = 100;

let age = 21;
let gpa = 7.5;
let price = 10;
let name = "loki";
let favgame = "fortnite";
let email = "loki123@gmail.com";
let online = false;
let isstudent = true;
console.log(typeof online);
console.log(`is he online ${online}`);
console.log(` is he a student ${isstudent}`);
console.log(typeof favgame );
console.log(typeof gpa);  //type of variable
console.log(`your game is ${favgame}`);
console.log(`your gmail is ${email}`);
console.log(price); // This will correctly print the value of price
console.log(`ur gpa is ${gpa}`); // Use backticks and ${} to embed the gpa variable
console.log(`your age is ${age}`); // Use backticks and ${} to embed the age variable


document.getElementById("myp1").textContent =`your favgame is  ${favgame}`;
document.getElementById("myp2").textContent = age;
document.getElementById("myp3").textContent = isstudent;