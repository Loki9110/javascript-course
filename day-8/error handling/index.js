// error = an object that is created to represent a problem that occurs
//  occur often with user input or establishing a connection

// try{} = encloses code that might potentially cause an error. 
// catch{} =  catch and handle any thrown errors from try{}.
// finally{} = (optional) always executes . used mostly for clean up
//              ex. close files , close connections , release resources

// example - 1
try {
    console.log(x);
}

catch(error){
    console.error(error);
}

finally {
    console.log("This will always run");
}
console.log("you've done great"); 


// example - 2

try { 
    const divident = Number(window.prompt("enter a divident:"));
    const divisor = Number(window.prompt("enter a divisor:"));

    if (divisor == 0){
        throw new Error("Divisor cannot be zero");
    }

    if (isNaN(divident) || isNaN(divisor)) {
        throw new error ("it should be a number")
    }
    const res = divident/divisor;
    console.log(res);
}

catch {
    console.error("Error: ", error.message);
}

console.log(`you're done when i say we are done`);