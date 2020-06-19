//////IFFI/////

(function(){
    console.log("Hi to IFFI")
}())

/*
function hi(){
   console.log("Hi to function")
}

console.log(hi())
*/

//////////////////////
function looping(userInput){
    for(i=0;i<userInput;i++){
        console.log(i)
    }
}

looping(10)
VM69:3 0
VM69:3 1
VM69:3 2
VM69:3 3
VM69:3 4
VM69:3 5
VM69:3 6
VM69:3 7
VM69:3 8
VM69:3 9


/////////////////

function * looping(userInput){
    for(i=0;i<userInput;i++){
        yield i
    }
}

var data = looping(10)
undefined
data.next()
{value: 0, done: false}
data.next()
{value: 1, done: false}
data.next()
{value: 2, done: false}
data.next()
{value: 3, done: false}
data.next()
{value: 4, done: false}
data.next()
{value: 5, done: false}
data.next()
{value: 6, done: false}
data.next()
{value: 7, done: false}
data.next()
{value: 8, done: false}
data.next()
{value: 9, done: false}
data.next()