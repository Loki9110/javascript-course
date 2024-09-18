// nested objects = objects inside of other objects .
//  allows you to represent more complex data structures 
// child object is enclosed by a parent object

//  person{addrss{}, contactinfo{}}
//  shoppingcart{keyboard{},monitor{}}    
//  person{address{street,city,state,zip},contactinfo{phone,email}}


const person1 = {
    fname: "kendall",
    lname : "roy",
    occupation : "ceo",
    age : 34,
    siblings : ["shioban roy","roman roy"],
    fathername : "logan roy",
    address : {
        street : "manhattan",
        city : "new york",
        state : "ny",
    }
}

console.log(person1.fname);
console.log(person1.occupation);
console.log(person1.age);
console.log(person1.siblings[1]);
console.log(person1.address.city);

for (const property in person1.address){
    console.log(person1.adress[property]);
}

/// example -2 

class  person {
    constructor(name,agee,...addres){
      this.name = name;
      this.agee = agee;
      this.addres =new  addres(...addres);
    }
}

class addres {
    constructor(street,city,state){
        this.street = street;
        this.city = city;
        this.state = state;
}
}

const pers1 = new person ("logan roy",79,"123 main st","glasgow","scotland");
const pers2 = new person ("roman roy",28,"county road","los angeles","california");
const pers3 = new person ("kendall roy",32,"manhattan","new york city","new york");

console.log(pers1.addres.city);
console.log(pers2.addres.city);
console.log(pers3.addres.state);

