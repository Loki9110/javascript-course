// checked property = property that determines the checked state of the html checkbox or radio button element

const check = document.getElementById("check");
const visa  = document.getElementById("visa");
const master = document.getElementById("master");
const paytm = document.getElementById("paytm");
const sub = document.getElementById("sub");
const res = document.getElementById("res");
const pay = document.getElementById("pay");

sub.onclick = function(){
    if(check.checked){
        res.textContent=`you are subscribed`;
    }
    else{
        res.textContent=`you are not subscribed`;
    }

    if(visa.checked){
        pay.textContent = `Visa card is selected`;
    }

    else if(master.checked) {
        pay.textContent = `master card is  selected`;
    }

    else if(paytm.checked){
        pay.textContent = `paytm is selected`;
    }

    else{
         pay.textContent = `no card is selected`;
    }
}