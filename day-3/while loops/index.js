// while loop = repeat some code until the condition is true

// do while loop =  here we execute a block of code atleast once before checking the condition


/*
let name = "loki";

while (name === "");{
    console.log("Enter your name");
}

console.log(`ur name is ${name}`);   */


/*
i = 1;
while (i<5){
    
    i++;
    console.log(`answer is ${i}`)
}
console.log(`hello bro`)     */ 



let loggedin = false;
let username;
let password;

while (!loggedin){
    username = window.prompt(`enter ur username`);
    password = window.prompt(`enter ur password`);


if (username === "lokesh"  &&  password == "001234")
{
    console.log(`logged in successfuly`);
}
else{
    console.log(`invalid username or password`);
    }
}