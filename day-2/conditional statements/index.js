// IF statements = if a condition is true , excute some code if not , do something else
// ELSE statements = if a condition is not true , execute some code
// ELSE IF statements = if a condition is not true , check another condition and execute some code if

/*

let age= 25;

if (age>=18){
    console.log(`you are old enough to vote`);
}
else {
    console.log(`you are not old enough to vote`);
}

let isstudent = false;

if (isstudent){
    console.log(`you are a student`);
}
else {
    console.log(`you are not a student`);
    }


let age = 25;                   // nested if statements
let isStudent = true;

if (age >= 18) {
  console.log(`you are old enough to vote`);
  if (isStudent) {
    console.log(`you are a student and old enough to vote`);
  } else {
    console.log(`you are not a student, but old enough to vote`);
  }
} else {
  console.log(`you are not old enough to vote`);
  if (isStudent) {
    console.log(`you are a student, but not old enough to vote`);
  } else {
    console.log(`you are not a student and not old enough to vote`);
  }
}



let age = 25;                         /// else if statements 
let isStudent = true;

if (age >= 25) {
  console.log(`you are an adult`);
} else if (age >= 18) {
  console.log(`you are old enough to vote`);
  if (isStudent) {
    console.log(`you are a student and old enough to vote`);
  } else {
    console.log(`you are not a student, but old enough to vote`);
  }
} else if (age >= 13) {
  console.log(`you are a teenager`);
} else {
  console.log(`you are a kid`);
}

*/


const mytext = document.getElementById("mytext");
const sub = document.getElementById("sub");
const para = document.getElementById("para");

let age;

sub.onclick = function(){
    age = mytext.value;

if (age>=18){
    para.textContent = `you are old enough to vote`;
}
else {
    para.textContent = `not old enough to vote`;
}


}