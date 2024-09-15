// .map() = accepts  a callback and applies that function to each element of an array ,then return a neww array

//example - 1

const numbers  = [1,3,4,6,8,9,21];

function square(element){
    return Math.pow(element,2);
}


function cube(element){
    return Math.pow(element,2);
}

const s = numbers.map(square);
console.log(s);
const c = numbers.map(cube);
numbers.map(c);

// example -2 :

const studname = ["kendall","sam","alex","hailey"];

function studsname(element){
    return element.toUppercase();

}

function studl(element){
    return element.toLowercase();
}

const st = studname.map(studsname);
console.log(st);

const sl = studname.map(studl)
console.log(sl);


//example -3

const dates = ["5-2-2019","23-5-2020","25-6-2023"];


function formatdates(element){
    const l = element.split("-");
    return `${parts[1]}/${parts[2]}/${parts[0]}`;
}


const sd = dates.map(formatdates);
console.log(sl);

