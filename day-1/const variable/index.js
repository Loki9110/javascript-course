// const =  avraiable that cant be changed
/*
const pi= 3.141;
let r;
let circ;
r = window.prompt(`enter the radius of a circle`);
r = Number(r);
circ = 2 * pi * r;
console.log(`the area of the circle is ${circ}`); */

const pi= 3.141;
let r;
let circ;

document.getElementById("sub").onclick=function(){
    r = document.getElementById("text").value;
    r = Number(r);
    circ = 2 * pi * r;
    document.getElementById("myh3").textContent = `the area of the circle is ${circ}`;
}
