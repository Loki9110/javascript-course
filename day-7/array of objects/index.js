// array of objects 

const fruits = [{name  : "apple", color : "red" , calories : 24},
                {name  : "orange",  color : "orange",calories : 35},
                {name   : "banana", color : "yellow" , calories :30},
                {name  :  "strawberry" color : "pink",calories : 35},
]

fruits.push({name : "grapes",color : "purple" , calories:29});  // add an object at the last
fruits.pop();  // remove the last object
fruits.splice(1,2);  // remove the objects at the partical indeces
fruits.forEach(fruit => console.log(fruit.calories));  // iterate through objects
const fruitname = fruits.map(fruit => fruit.name);  // map every object with a function
console.log(fruitname);
const yellowfr = fruits.filter(fruit => fruit.color === "yellow"); // filter the objects acc to the condition
console.log(yellowfr);
const maxfr = fruits.reduce((max,fruit) => fruit.calories > max.calories ?  fruit : max );
console.log(maxfr);
console.log(fruits[1].name);

