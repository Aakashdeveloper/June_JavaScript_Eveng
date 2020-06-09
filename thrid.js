/////String Operations////
var a = "aakash"
undefined
a.toUpperCase()
"AAKASH"
a.toLowerCase()
"aakash"

var a = "aakash"
"Aakash"


var a = "Hi"
var b = "Hi"
var c = "hi"


a.toLowerCase() == c.toLowerCase()

var c = "hi"
undefined
a
"Hi"
c
"hi"
a == c
false
a.toLowerCase() == c.toLowerCase()
true

var a = "Hi"
var b = "Hi"
var c = "hi"

undefined
a == b
true
a == c
false
a.toLowerCase() == c.toLowerCase()
true

var name = "john"
undefined
name.length
4
var name = "   John  "
undefined
name.length
9
name.trim()
"John"
var a = "Brain      james"
undefined
a.trim()
"Brain      james"

Slice 
var city="Amsterdam"

var city="Amsterdam"
undefined
city.slice(1)
"msterdam"
city.slice(2)
"sterdam"
city.slice(1,2)
"m"
city[0]
"A"
city.slice(2,4)
"ste"

var city="Amsterdam"
undefined
city.charAt(0)
"A"
city.charAt(3)
"t"

var city = "pAriS"

city.charAt(0)

var city = "pAriS"

city.charAt(0)
"p"
city.charAt(0).toUpperCase()
"P"
city.slice(1)
"AriS"
city.slice(1).toLowerCase()
"aris"
city.charAt(0).toUpperCase()+city.slice(1).toLowerCase()
"Paris"

city.charAt(0).toUpperCase()+city.toLowerCase()

var greet = "Welcome to JavaScript"
undefined
greet.replace('JavaScript','JS')
"Welcome to JS"
var greet = "JavaScript Welcome to JavaScript"
undefined
greet.replace('JavaScript','JS')
"JS Welcome to JavaScript"
greet.replace('JavaScript','JS').replace('JavaScript','JS')
"JS Welcome to JS"
greet.replace(/JavaScript/,'JS')
"JS Welcome to JavaScript"
greet.replace(/JavaScript/g,'JS')
"JS Welcome to JS"
var subject = "JavaScript"
undefined
subject.replace('a','A')
"JAvaScript"
subject.replace(/a/g,'A')
"JAvAScript"
var greet = "Brian    James"
undefined
greet.replace(/ /g,'-')
"Brian----James"
greet.replace(/   /g,'-')
"Brian- James"
greet.replace(/    /g,'')
"BrianJames"
greet.replace(/    /g,' ')
"Brian James"


var city="London"
undefined
city.charAt(2)
"n"
city.indexOf('d')
3
city.indexOf('z')
-1
city.indexOf('j')
-1
city.indexOf('n')
2

slice(start,end)
substring(start,end)
substr(start,length)

var a = "Hongkong"
undefined
a.slice(1)
"ongkong"
a.substring(1)
"ongkong"
a.substr(1)
"ongkong"
a.slice(1,3) > (1,2)
"on"
a.substring(1,3) > (1,2)
"on"
a.substr(1,3) > (1,2,3)
"ong"

Slice ('Hongkong')
    > a(-2) => it will give me 2 letters from backward >("ng")
    > a(-2,1) => it will blank string >("")
    > a(1,-2) => it will remove from both direaction('ongko')
    > a(-2,-2) => it will black string >("")

substring('Hongkong') 
       > a(-2) => it will same string >("Hongkong") 
       > a(-2,1) =>  only considered +v integer ("H")
       > a(1,-2) =>  only considered +v integer ("H")
       > a(-2,-2) => it will blank string >("")


var a = "Hongkong"
undefined
a.slice(2,2)
""
a.slice(2,3)
"n"
a.slice(-2,2)
""
a.slice(2,-2)
"ngko"
a.slice(-2)
"ng"
a.slice(-3)
"ong"
a.slice(-3,1)
""
a.slice(1,-3)
"ongk"


var a = "Hongkong"
undefined
a.substring(-2)
"Hongkong"
a.substring(-2,1)
"H"
a.substring(1,-2)
"H"
a.substring(-1,5)
"Hongk"
a.substring(-1,3)
"Hon"
a.substring(-2,3)
"Hon"

var a = "Hongkong"
undefined
a.substr(-1)
"g"
a.substr(-2)
"ng"
a.substr(-2,1)
"n"
a.substr(-3,1)
"o"
a.substr(-3,2)
"on"
a.substr(-5,2)
"gk"

var a = "Hongkong"
undefined
a.substr(-2,-2)
""
a.substr(2,-2)
""
a.substr(-2)
"ng"