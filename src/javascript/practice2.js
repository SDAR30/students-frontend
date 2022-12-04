function getRand(num) {
    return Math.ceil(Math.random() * 6)


}

const beanCounter = {
    beans: 2,
    addBeans: function (num = 1) {
        this.beans += num;
        console.log(this.beans)
    }
}
// beanCounter.addBeans(4);
// beanCounter.addBeans();

// Encapsulation: insides object/class, gives us more ability to shiled certain data from access.
// Abstraction: 
// Inheritence: start with basic props & behaviors, and build more complex ones on top of it.
// Polymorphism: 


//https://medium.com/@cancerian0684/what-are-four-basic-principles-of-object-oriented-programming-645af8b43727
// Abstraction: In a way, one class should not know the inner details of another in order to use it,
// just knowing the interfaces should be good enough.

//constructor: capitilzed. Has implicit return, always returns object; Must use new keyword;
// function Vehicle(wheels, color) {
//     this.wheels = wheels;
//     this.color = color;
//     this.registered = false;

//     this.updateRegistration = function (bool) {
//         this.registered = bool;
//     }
// }



class Vehicle {
    constuctor(wheels, color) {
        this.wheels = wheels;
        this.color = color;
        this.registered = false;
    }
    updateRegistration = function (bool) {
        this.registered = bool;
    }
}

let car = new Vehicle(4, 'hot green');
console.log(car)
car.updateRegistration(true)
console.log(car.registered)

//What's happening here? Array is a contructor built in to JS, we must use new keyword
//which gives us a new instance of an array with one argument.
let newArr = new Array(3)
//function Array(length = 0){
 // this.length = length; 
 //...   
//}

function StopWatch(){
    this.timeElapsed = 0;
}