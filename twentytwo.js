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