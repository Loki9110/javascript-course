//javascript objects = a colelction of related properties and/or methods can represent real world objects (people,products,places)

//   object = {key:value,
//              function()}


const person1 = {
    firstname : "kendall",
    lastname : "roy",
    age : 31,
    employed : true,
    occupation : function() { console.log(`CEO of waystar royco`)},
}

const person2 = {                       // onjects should'nt have a same name
    firstname : Roman,
    lastname : Roy,
    age : 27,
    employed : false,
    identity : () => console.log(`youngest son of logan roy`),
}


console.log(person1.firstname);
console.log(person1.lastname);


console.log(person2.firstname);
console.log(person2.lastname);
console.log(person2.age);

person1.identity();