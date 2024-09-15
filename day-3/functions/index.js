// functions = a section of reusable code 
//              declare code once , use it many times
//              call the functions to execute that code

// decalring a function :  function functionname(){}
// calling a function : functionname();

/*
function name(){
    console.log("Hello , I am loki");
    console.log("i play fortnite");
}
name(); */

/*
 function persage(age,standared){   // parameters
    console.log(`my age is ${age}`);
    console.log(`my standered is ${standared}`);
 }
persage(21,"btech 4th year"); // arguments
persage(20,"btech 3rd year"); 
*/

function add(a,b){
    res = a+b;
    return res;
}

 let ans = add(2,5);
 console.log(ans);      // or console.log(add(2,5));