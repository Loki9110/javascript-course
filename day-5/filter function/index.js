// filter() = creates a new array by filterinf out elements 

// example-1
const numbers = [1,4,6,8,7,9];

function evennums(element){
    return element % 2 === 0;
}

function oddnums(element){
    return element % 2 !== 0;
}

const en = numbers.filter(evennums);
console.log(en);

const onum = numbers.filter(oddnums);
console.log(onum);

// example - 2

const age = [23,17,18,15,20];

function canvote(element){

    return element >= 18;
}

function cantvote(element){
    return element < 18;
}

const vt = age.filter(canvote);
console.log(vt);

const cvt = age.filter(cantvote);
console.log(cvt);

// example -3 


const words = ["darksouls","uncharted","valorant","fortnite"];

function longwrds (element){
 return element >= 8;
}

function shortwrds (element){
    return element <= 8;
}

const long = words.filter(longwrds);
const short = words.filter(shortwrds);

console.log(long,short);