function
methods
arrow function
IFFI
Generator function

var a=10
var b=20
a+b

function add(a,b){
    return a+b
}
undefined
add(1,2)
3
add(20,30)
50
add('a','b')
"ab"

function isEven(num){
    if(num%2==0){
        console.log(`number ${num} is even`)
    }else{
        console.log(`number ${num} is odd`)
    }
}

function isEven(num){
    if(num%2==0){
        console.log(`number ${num} is even`)
    }else{
        console.log(`number ${num} is odd`)
    }
}
undefined
isEven(2)
VM705:3 number 2 is even
undefined
isEven(5)
VM705:5 number 5 is odd

///////////Method///////
var isEven = function(num){
    if(num%2==0){
        console.log(`number ${num} is even`)
    }else{
        console.log(`number ${num} is odd`)
    }
}

isEven(2)
number 2 is even


///////////Arrow///////
///////Es6/////
var isEven = (num) => {
    if(num%2==0){
        console.log(`number ${num} is even`)
    }else{
        console.log(`number ${num} is odd`)
    } 
}