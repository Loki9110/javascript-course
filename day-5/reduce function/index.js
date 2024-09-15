// .reduce() = reduces the elements of an array to a single value

const num = [3,4,7,9,8];

fuction sum (previous,next){   // 0 , 3
    return previous + next;  // 0 + 3 --->  3 + 4 ---> 7 + 7 ---> 14 + 9 
}

const add = num.reduce(sum);
console.log(add);


// example -2 

const numbs = [23,34,56,95,37,10];

function maxnum(accumulator,element){
    return Math.max(accumulator,element);
}

const ma = numbs.reduce(maxnum);
console.log(ma);



function minnum(accumulator,element){
    return Math.min(accumulator,element);
}

const mi = numbs.reduce(minnum);
console.log(mi);

