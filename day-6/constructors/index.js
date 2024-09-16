// constructors = special method for defining the properties and methods of objects.

function car (name,company,year,color){
    this.name = name,
    this.company = company,
    this.year = year,
    this.color = color,
    this.drive  = function () {
        console.log(`you are driving the ${this.company}`)
    }
}

const car1 = new car("dodge","charger","2003","black");
const car2 = new car("nissan","skyline","2001","blue");
const car3 = new car("buggati","chiron","2020","saffron");


console.log(car1);
console.log(car2);
console.log(car3);


car1.drive();
car2.drive();
car3.drive();