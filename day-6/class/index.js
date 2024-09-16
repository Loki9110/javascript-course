// class = provides a more structured and cleaner way to work with objects compared to traditional constructor functions
///   ex. statics keyword ,encapsulation ,inheritence


class car () {
    
    constructor(name,model){
        this.name = name;
        this.model = model;
    }

    displaycar(){
        console.log(`name of the car is ${this.name}`);
        console.log(`model of the car is ${this.model}`);
    }
}

const car1 = new car("lambo","sesto elemento");
const car2 = new car("nissan","GTR");

car1.displaycar();        