/*tem = window.prompt();
n = Number(tem);    // to fahrenheit
f = n * 9/5 +32;
console.log(f);
*/


const text = document.getElementById("text");
const fah = document.getElementById("fah");
const cel = document.getElementById("cel");
const res = document.getElementById("res");
let temp;

function convert(){
   if(fah.checked){
           temp = Number(text.value);
           temp = temp * 9/5 +32;
           res.textContent = temp +"F";
   }
   else if(cel.checked){
    temp = Number(text.value);
    temp = (temp -32)* (5/9);
    res.textContent = temp + "C";
   }

   else{
     res.textContent = " select a unit";
   }
}