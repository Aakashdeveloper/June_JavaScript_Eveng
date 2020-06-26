///es5/////
function language(name,country){
    this.name = name;
    this.country = country
}
undefined
var Hindi = new language('Hindi','India')
undefined
Hindi
language {name: "Hindi", country: "India"}


///es6////
class langauge1{
    constructor(name,country){
        this.name = name;
        this.country = country
    }
}

var English = new langauge1('English','USA')
undefined
English
langauge1 {name: "English", country: "USA"}
