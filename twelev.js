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