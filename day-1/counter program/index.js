const decreasebtn = document.getElementById("decrease");
const resetbtn = document.getElementById("reset");
const increasebtn = document.getElementById("increase");
const countlbtn = document.getElementById("countl")
let count=0;

increasebtn.onclick = function(){
    count++;
    countlbtn.textContent = count;
}


decreasebtn.onclick = function(){
    count--;
    decreasebtn.textContent=count;
}


resetbtntn.onclick = function(){
    count=0;
    resetbtn.textContent=count;
}

