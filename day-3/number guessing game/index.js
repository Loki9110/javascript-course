let ran  = Math.ceil(Math.random() * 10);
console.log(ran);



const max = 1;
const min = 100;
let rn;

sub = document.getElementById(sub);
labe = document.getElementById(labe);

sub.onclick = function(){
    rn = Math.floor(Math.random() * (max - min + 1)) + min;

    labe.textcontent = rn
}

