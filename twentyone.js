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