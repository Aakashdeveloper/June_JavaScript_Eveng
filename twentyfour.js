function human(name){
    this.name=name
    this.city= "Newyork"
}

function robot(name){
    this.name = name;
    this.legs =2
    this.color="red"

}

var john = new human('John');
var pepper = new robot('pepper');

/////////////////////////

human.prototype = new robot()


var john = new human('John');
undefined
john
human {name: "John", city: "Newyork"}
john.color
"red"
john.legs
2

robot.prototype = new human()