// rest parameters = (..rest) allow  a function work with a variable number of arguments by bundling them into array

// spread = expands an arrayinto seperate elements
// rest = bundles seperate elements into an array

const game1 ="fortnite";
const game2 = "warzone";
const game3 = "dead by daylight";

function game(...games){
    console.log(games);
}

game(game1, game2, game3);

// example 2 :
funtion sum (...numbers){
    let res = 0;
    for (let number of numbers){
        res += numbers;
    }
    return res;
}

let br = sum(34,65);
console.log(br);

// example 3: 

function combine(...strings){
    return strings.join("-");
}

let bro = combine("MR","LOKESH","KUMAR";)

    console.log(bro);
