// static = keyword the defines properties or methods that belongs to a class itself rather than  the objects created from the class 
//             (class owns anything thats static,not the objects)

class mathutil{
    static pi = 3.14;

    static getdiameter(radius){
        return radius * 2;
    }
    static getcircumference(radius){
        return this.pi * this.getdiameter(radius);
    }
    static getarea(radius){
        return this.pi * radius *radius;
    }
}

console.log(mathutil.pi); // we can directly use this instead of creating an object.
console.log(mathutil.getdiameter(10));
console.log(mathutil.getcircumference(10));
console.log(mathutil.getarea(10));