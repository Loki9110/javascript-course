// callback = a function that is used as an argument to another function
 
 // used to handle asynchronus operations
 //  1.reading a file
 //  2.network requests
 //  3.interacting with databases

 //   "hey when you're done,call this next."
// example -1 

function hello(callback){
    console.log("hello bro");
    callback();
}

function leave(){
    console.log("leave here bro");

}

hello(leave);

// example-2

function add(callback,x,y){
    let res = x+y;
    callback(res);
}

function dispres(res){
    console.log(res);
}

function disp(res){
    document.getElementById("lolz").textContent = res;
}

add(disp,2,5);