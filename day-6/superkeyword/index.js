// super = keyword is used in classes to classes to call the constructor or access the properties and methods of a parent (superclass)
// this = this object 
// super = the parent

class Animal{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
}

class rabbit extends Animal{
    constructor(name,age,runspeed){
        super(name,age)
        this.runspeed = runspeed;
    }
    run(){
        console.log(`this ${this.name} can run`);
    }
}

class fish extends Animal{
    constructor(name,age,swimspeed){
        super(name,age)
        this.swimspeed;
    }
}

class hawk extends Animal{
    constructor(name,age,flyspeed){
        super(name,age)
        this.flyspeed = flyspeed;
    }
}


const rabbit = new rabbit("rabbit",1,24);
const fish = new fish("fish",1,10);
const hawk = new hawk("hawk",3,35);

console.log(rabbit.name);
console.log(hawk.age);
console.log(fish.swimspeed);