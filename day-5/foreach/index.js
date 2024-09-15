// for each() = method used to iterate over the elements of an array and apply a specified function(callback) to each element 

// array.foreach(callback)
// array, index, array are provided 


// example -1 :
/*
let numbers = [1,2,3,4,5,6,7];

function dispnumbers(elements){
    console.log(elements);
}

function double(element,index,array)
{
    array[index] = element * 2;
}

function tripe(element,index,array){
    array[index] = element * 3;

}

function square(element,index,array){
    array[index] = Math.pow(element,2);
}

numbers.foreach(double);
numbers.foreach(dispnumbers);
numbers.foreach(tripe);
numbers.foreach(square);     */ 


// example -2 :

games = ["fortnite","outlaws","starfield","uncharted"];

function displgames(ele){
    console.log(ele);
}

function toupper(element,array,index){
    array[index] = element.toUppercase();
}

function charupper(element,array,index){
    array[index] = element.charAt(1).toUppercase();
}

games.forEach(displgames);
games.forEach(toupper);
games.forEach(charupper);

