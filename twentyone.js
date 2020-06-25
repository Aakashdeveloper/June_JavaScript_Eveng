literal Notation 
constructor Notation


////literal Notation ////
var moviename = "bb"
var movierating = 9
var movielang = "eng"

var movies = {
    name:'Avengers',
    rating: 4.4,
    language:'English'
}

movies
{name: "Avengers", rating: 4.4, language: "English"}
typeof(movies)
"object"
movies.language
"English"
movies.name
"Avengers"
movies.rating
4.4
movies['language']
"English"
movies['rating']
4.4

movies.genre="Action"
"Action"
movies
{name: "Avengers", rating: 4.4, language: "English", genre: "Action"}
movies.rating = 4.5
4.5
delete movies.name
true
movies
{rating: 4.5, language: "English", genre: "Action"}

var movies = [
    {
        name:'Avengers',
        rating: 4.4,
        language:'English'
    },
    {
        name:'Mad Max',
        rating: 3.4,
        language:'English'
    },
    {
        name:'Death Race',
        rating: 4.5,
        language:'English'
    }
]

movies[1].name
"Mad Max"
movies[2].name
"Death Race"

var sayhi = {
    firstname:'John',
    lastname:'Ammy',
    greet:function(){
        return `Say hi to everyone`
    }
}
sayhi.firstname
"John"
sayhi.lastname
"Ammy"
sayhi.greet()
"Say hi to everyone"

var calc={
    sum:(a,b)=>{return a+b},
    sub:(a,b)=>{return a-b}
}
undefined
calc.sum(1,2)
3
calc.sub(2,3)
-1


var dbquery={
    find:(table)=>{return `Select * from ${table}`},
    insert:(table,data)=>{return `insert into ${table} name,city VALUES(${data.name},${data.city})`}
}

dbquery.find('students')
"Select * from students"
dbquery.insert('students',{name:'John',city:'Delhi'})
"insert into students name,city VALUES(John,Delhi)"


for(i=0;i<movies.length;i++){
    console.log( dbquery.insert('students',{name:movies[i].name,city:movies[i].city}))
   
}

