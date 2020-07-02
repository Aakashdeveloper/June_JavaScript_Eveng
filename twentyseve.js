var person = {
    fullname:function(){
        return `${this.firstname} ${this.lastname}`
    }
}

var john = {
    firstname:'John',
    lastname:'Zoe'
}

person.fullname.call(john)
"John Zoe"
///////////
//////


var person = {
    fullname:function(city,country){
        return `${this.firstname} ${this.lastname} ${city} ${country}`
    }
}

var john = {
    firstname:'John',
    lastname:'Zoe'
}

person.fullname.call(john,'Delhi','India')
"John Zoe Delhi India"

person.fullname.apply(john,['Delhi','India'])
"John Zoe Delhi India"

person.fullname.call(john,['Delhi','India'])
"John Zoe Delhi,India undefined"