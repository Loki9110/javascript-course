// inheritence = allows new class to inherit properties and methods from an existing class (parent -> child) helps with code reusablility


class Animal{
    alive = true;

    eat(){
        console.log(`this ${this.name} is eating`);
    }

    sleep(){
        console.log(`this ${this.name} is sleeping`);
    }
}

class rabbit{
    name = "rabbit";
    run(){
        console.log(`this ${this.name} can run`);
    }
}

class lion {
    name = "lion";
    hunt(){
        console.log(`his ${this.name} can hunt`);
    }
}
class tiger{
    name = "tiger";
}

const Rabbit = new rabbit();
const lion = new lion();
const tiger = new tiger();

console.log(Rabbit.alive);
lion.sleep();
tiger.eat();