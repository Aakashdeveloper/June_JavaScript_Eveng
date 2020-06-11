var name = "Avengers"
var rating = 4.5
var type="Action"
var ind = "Hollywood"

//es5
var data =  "The "+name+" is an "+type+" movie, with rating as "+rating+" from "+ind+"."
data
"The Avengers is an Action movie with rating as 4.5 from Hollywood."

//es6 
//String literials

var data1 = `The ${name} is an ${type} movie with rating as ${rating} from ${ind}.`
data1
"The Avengers is an Action movie with rating as 4.5 from Hollywood."
