// setTimeout = function in js that allows you to schedule the execution of a function after an amount of time (milliseconds)

// setTimeout(function, milliseconds)

// function = the function you want to execute after the time has passed
/*
function hel(){
    console.log("Hello");
}

setTimeout(hel,4000);

setTimeout(function (){window.alert("hello")
},2000);

setTimeout(() => window.alert("bye"),5000);

// cleartimeout(timeoutid) = can cancel a timeout before it triggers
``
const tout = setTimeout(function() {
    console.log('Timeout triggered');
},3000);
clearTimeout(tout);    */

let tout ;

function starttimer () {
   tout =  setTimeout(function () {window.prompt("hello");},3000);
    console.log("started");
}

function stoptimer () {
    clearTimeout(tout);
    console.log("cleared");
}
