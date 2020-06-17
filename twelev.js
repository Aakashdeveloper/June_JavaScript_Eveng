var a = [2,3,4,5,34,46,45,5776]
var b = ['ddf','dgr',"46dg"]
var c = [true,true,false,true];


var d= [54,46,"g","dfh",true,false,"fgr",4]

>>>>> array can be collection of homogenious or hetrogenious

var city=['Delhi','Prais','Amsterdam','Nice','Helsinki']
var city=['Delhi','Prais','Amsterdam','Nice','Helsinki']
undefined
city
(5) ["Delhi", "Prais", "Amsterdam", "Nice", "Helsinki"]
typeof(city)
"object"
city.length
5
city[0]
"Delhi"
city.length-1
4
city[city.length-1]
"Helsinki"

var city=['Delhi','Prais','Amsterdam','Nice','Helsinki']
undefined
city.push('Dubai')
6
city
(6) ["Delhi", "Prais", "Amsterdam", "Nice", "Helsinki", "Dubai"]

var city=['Delhi','Prais','Amsterdam','Nice','Helsinki']
undefined
city.push('Dubai')
6
city
(6) ["Delhi", "Prais", "Amsterdam", "Nice", "Helsinki", "Dubai"]
city.push('Boston')
7
city
(7) ["Delhi", "Prais", "Amsterdam", "Nice", "Helsinki", "Dubai", "Boston"]
city.pop()
"Boston"

var city = ["Delhi", "Prais", "Amsterdam", "Nice", "Helsinki", "Dubai", "Boston"]
city.pop(2)
"Boston"
city.shift()
"Delhi"

var city = ["Delhi", "Prais", "Amsterdam", "Nice", "Helsinki", "Dubai", "Boston"]
undefined
city.pop(2)
"Boston"
city
(6) ["Delhi", "Prais", "Amsterdam", "Nice", "Helsinki", "Dubai"]
city.shift()
"Delhi"
city.unshift('Pune')
6
city
(6) ["Pune", "Prais", "Amsterdam", "Nice", "Helsinki", "Dubai"]


push => add in the end of array
pop => remove always last value of array
shift => remove from first value of array
unshift => add as first value of array


/////////
slice()
splice()

var city = ["Delhi", "Prais", "Amsterdam", "Nice", "Helsinki", "Dubai", "Boston"]

var city = ["Delhi", "Prais", "Amsterdam", "Nice", "Helsinki", "Dubai", "Boston"]
undefined
city.slice(1)
(6) ["Prais", "Amsterdam", "Nice", "Helsinki", "Dubai", "Boston"]
city
(7) ["Delhi", "Prais", "Amsterdam", "Nice", "Helsinki", "Dubai", "Boston"]
city.slice(3)
(4) ["Nice", "Helsinki", "Dubai", "Boston"]
city.slice(2,5)
(3) ["Amsterdam", "Nice", "Helsinki"]
city
(7) ["Delhi", "Prais", "Amsterdam", "Nice", "Helsinki", "Dubai", "Boston"]
city.slice(2,0,'Pune','Mumbai')
[]
city
(7) ["Delhi", "Prais", "Amsterdam", "Nice", "Helsinki", "Dubai", "Boston"]
city.splice(2,0,'Pune','Mumbai')
[]
city
(9) ["Delhi", "Prais", "Pune", "Mumbai", "Amsterdam", "Nice", "Helsinki", "Dubai", "Boston"]
city.splice(3,1)
["Mumbai"]
city
(8) ["Delhi", "Prais", "Pune", "Amsterdam", "Nice", "Helsinki", "Dubai", "Boston"]
city.splice(3,1,'Innsburg','Venice')
["Amsterdam"]
city
(9) ["Delhi", "Prais", "Pune", "Innsburg", "Venice", "Nice", "Helsinki", "Dubai", "Boston"]

var city = ["Delhi", "Prais", "Amsterdam", "Nice", "Helsinki", "Dubai", "Boston"]
undefined
city.indexOf('Mumbai')
-1
city.indexOf('Venice')
-1
city.indexOf('Paris')
-1
city.indexOf('Nicee')
-1
city.indexOf('Nice')
3

var a  = ['a','b','c']
var b  = [1,2,3]

a+b

var a  = ['a','b','c']
var b  = [1,2,3]
a+b
"a,b,c1,2,3"
var c = ["Hi","bie","Hello"]
undefined
a+b+c
"a,b,c1,2,3Hi,bie,Hello"
a.concat(b)
(6) ["a", "b", "c", 1, 2, 3]
a.concat(b,c)
(9) ["a", "b", "c", 1, 2, 3, "Hi", "bie", "Hello"]

var url = "https://rbs.wd3.myworkdayjobs.com/en-US/RBS/userHome"
url.split('/')


var url = "https://rbs.wd3.myworkdayjobs.com/en-US/RBS/userHome"
undefined
url.split('/')
(6) ["https:", "", "rbs.wd3.myworkdayjobs.com", "en-US", "RBS", "userHome"]
var data = "Hi I am doing JavaScript"
undefined
data.split(' ')
(5) ["Hi", "I", "am", "doing", "JavaScript"]
var mydata = data.split(' ')
undefined
mydata[0]
"Hi"
var a = "javascript"
undefined
a.split('')
(10) ["j", "a", "v", "a", "s", "c", "r", "i", "p", "t"]

var a =  ["j", "a", "v", "a", "s", "c", "r", "i", "p", "t"]
undefined
a.toString()
"j,a,v,a,s,c,r,i,p,t"
a.toString()
"j,a,v,a,s,c,r,i,p,t"
data.replace(/,/g,'')
"javascript"


var city = ["Delhi", "Prais", "Amsterdam", "Nice", "Helsinki", "Dubai", "Boston"]
undefined
city.sort()
(7) ["Amsterdam", "Boston", "Delhi", "Dubai", "Helsinki", "Nice", "Prais"]
city.reverse()
(7) ["Prais", "Nice", "Helsinki", "Dubai", "Delhi", "Boston", "Amsterdam"]
var city = ["Delhi", "Prais", "Amsterdam", "Nice", "Helsinki", "Dubai", "Boston"]
undefined
city.reverse()
(7) ["Boston", "Dubai", "Helsinki", "Nice", "Amsterdam", "Prais", "Delhi"]
city.sort().reverse()
(7) ["Prais", "Nice", "Helsinki", "Dubai", "Delhi", "Boston", "Amsterdam"]

//Es7
var city = ["Delhi", "Prais", "Amsterdam", "Nice", "Helsinki", "Dubai", "Boston"]
undefined
city.includes('Delhi')
true
var myarr = Array.of(6)
undefined
myarr
[6]
var myarr = Array.of(6,8,9)
undefined
myarr
(3) [6, 8, 9]

//Spread
var city = ["Delhi", "Prais", "Amsterdam", "Nice", "Helsinki", "Dubai", "Boston"]
undefined
console.log(...city)
VM1975:1 Delhi Prais Amsterdam Nice Helsinki Dubai Boston

//Es7
var a = [10,20,30,40]
undefined
a.fill(100,3)
(4) [10, 20, 30, 100]
a.fill(100,1,3)
(4) [10, 100, 100, 100]
a.fill(100,1,2)
(4) [10, 100, 100, 100]
var a = [10,20,30,40]
undefined
a.fill(100,1,2)
(4) [10, 100, 30, 40]

var city = ["Delhi", "Prais", "Amsterdam", "Nice", "Helsinki", "Dubai", "Boston"]
undefined
city.copyWithin(2,1)
(7) ["Delhi", "Prais", "Prais", "Amsterdam", "Nice", "Helsinki", "Dubai"]
var city = ["Delhi", "Prais", "Amsterdam", "Nice", "Helsinki", "Dubai", "Boston"]

var city = ["Delhi", "Prais", "Amsterdam", "Nice", "Helsinki", "Dubai", "Boston"]
undefined
city.copyWithin(3,2)
(7) ["Delhi", "Prais", "Amsterdam", "Amsterdam", "Nice", "Helsinki", "Dubai"]
var city = ["Delhi", "Prais", "Amsterdam", "Nice", "Helsinki", "Dubai", "Boston"]
undefined
city.copyWithin(4,3)
(7) ["Delhi", "Prais", "Amsterdam", "Nice", "Nice", "Helsinki", "Dubai"]

var city = ["Delhi", "Prais",[1,2,3,['a','b','c']], "Amsterdam", "Nice", "Helsinki", "Dubai", "Boston"]
undefined
city.flat()
(11) ["Delhi", "Prais", 1, 2, 3, Array(3), "Amsterdam", "Nice", "Helsinki", "Dubai", "Boston"]
city.flat(2)
(13) ["Delhi", "Prais", 1, 2, 3, "a", "b", "c", "Amsterdam", "Nice", "Helsinki", "Dubai", "Boston"]

var city = ["Delhi", "Prais",[1,2,3,['a','b','c']], "Amsterdam", "Nice", "Helsinki", "Dubai", "Boston"]
undefined
city[2]
(4) [1, 2, 3, Array(3)]
city[2][0]
1
city[2][3]
(3) ["a", "b", "c"]
city[2][3][0]
"a"