var firstname = "Michal";
var lastname = "Zoe";

var sayhi = {
    firstname:'John',
    lastname:'Ammy',
    greet:function(){
        return `Say hi to ${this.firstname} ${this.lastname}`
    }
}

console.log(sayhi.greet())

//////////////////Constructor///////
var car = new Object();
car.color="red"
car.brand="BMW"
"BMW"
typeof(car)
"object"
car
{color: "red", brand: "BMW"}
car.color
"red"
car.brand
"BMW"


//////////////

var bob = new Object();
bob.age = 10;
bob.city ="Newyork"
bob.setAge = function(newAge){
    this.age = newAge
}

bob
{age: 10, city: "Newyork", setAge: ƒ}
bob.setAge(20)
undefined
bob
{age: 20, city: "Newyork", setAge: ƒ}

var tony = new Object();
tony.age = 10;
tony.city ="Newyork"
tony.setAge = function(newAge){
    this.age = newAge
}


let createAge= function(newAge){
    this.age = newAge
}

var bob = new Object();
bob.age = 10;
bob.city ="Newyork"
bob.setAge = createAge

var tony = new Object();
tony.age = 10;
tony.city ="Newyork"
tony.setAge = createAge