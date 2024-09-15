// random number generator
/*
let ran= Math.random() * 6;  // * 6  will give a random number between 0 to 6
console.log(ran);*/

const mybut = document.getElementById("but");
const labe = document.getElementById("lab");

const min=1;
const max=10;
let rand;

mybut.onclick = function()
{
    rand = Math.floor(Math.random() * (max - min + 1)) + min;
    labe.textContent = rand;
}