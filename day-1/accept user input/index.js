// to accept user input

// 1. EASY WAY = WINDOW PROMPT
// 2. PROFESSIONAL WAY = HTML textbox

let username;
/* username = window.prompt();
 console.log(username);  */     // EASY WAY 

document.getElementById("mysub").onclick = function(){  // professional way
    username=document.getElementById("mtext").Value;
    console.log(username);
}