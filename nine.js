if(condition){
   //do something
}else{
     //do something
}

var a = 767687
if(a%2===0){
    console.log(`Number ${a} is even`)
}else{
    console.log(`Number ${a} is odd`)
}

var a = 767687
if(a%2===0){
    console.log(`Number ${a} is even`)
}else if(a%3===0){
    console.log(`Number ${a} is divisible by 3`)
}
else{
    console.log(`Number ${a} is odd`)
}




var a = 12
if(a%2===0){
    console.log(`Number ${a} is even`)
}else if(a%3===0){
    console.log(`Number ${a} is divisible by 3`)
}
else{
    console.log(`Number ${a} is odd`)
}


var a = 12
if(a%2===0){
    console.log(`Number ${a} is even`)
}
if(a%3===0){
    console.log(`Number ${a} is divisible by 3`)
}
else{
    console.log(`Number ${a} is odd`)
}


var a = 12
if(a%2===0){
    console.log(`Number ${a} is even`)
}
else if(a%3===0 || a%5===0){
    if(a%3===0){
        console.log(`Number ${a} is divisible by 3` )
    }else{
        console.log(`Number ${a} is divisible by  5` )
    }  
}
else{
    console.log(`Number ${a} is odd`)
}


var a = 1
if(a){
    console.log("hiii")
}else{
    console.log("biie")
}
VM368:3 hiii
undefined
var a = 0
if(a){
    console.log("hiii")
}else{
    console.log("biie")
}
VM374:5 biie


var a="john"
if(a){
    console.log("hiii")
}else{
    console.log("biie")
}

var a=undefined
if(a){
    console.log("hiii")
}else{
    console.log("biie")
}
VM432:5 biie


var a=true
if(a === true){
    console.log("hiii")
}else{
    console.log("biie")
}


var a= 10
a>10?"hii":"bie"

//ternory operator
var a= 10
a>10?"hii":"bie"
"bie"
var a= 10
a==10?"hii":"bie"
"hii"
var a= 10
a==10?a+1:a-1
11
var a= 10
a==11?a+1:a-1
9

if(a==10){
    console.log("hiii")
}else{
    console.log("bie")
}

//Wrong
a==10?"hii":"bie"?10:20
//