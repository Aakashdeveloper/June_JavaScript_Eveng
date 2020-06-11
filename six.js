console.log() > debug
alert()  > notification
prompt() > input from user
confirm() > confirm from user


prompt("What is your age?")
var age = prompt("What is your age?")
"10"

var out = confirm("Do you want to leave")
out = true 
out = false


var first = prompt("Enter first number?")
var second = prompt("Enter second number?")
var out = first+second
alert(out)


undefined
var first = prompt("Enter first number?")
var second = prompt("Enter second number?")
var out = parseFloat(first)+parseFloat(second)
alert(out)


var first = prompt("Enter first number?")
var second = prompt("Enter second number?")
var out = parseFloat(first)+parseFloat(second)
alert(out.toFixed(2))