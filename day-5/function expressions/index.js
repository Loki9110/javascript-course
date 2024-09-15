// function  declaration = define a reusable block of code that performs a secific task 

function hello(){
    console.log(`hello bruv`);
}
  setTimeout(hello,300);
// function expression = a way to define functions as values ,ARGUMENTS or variables

const hel = function(){
    console.log(`hello bro`);
} 
hel();


// IN JAVASCRIPT WE CAN PASS AN ENTIRE FUNCTION AS AN ARGUMENT 

setTimeout(function(){
    console.log(`how are you doi'n lil bro`);
},2000);

