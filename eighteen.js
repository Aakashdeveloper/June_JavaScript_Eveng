/*
var a  = 10
function add(){
    var b = 20;
    return a+b
}

console.log(add())
console.log("a>>>",a)
console.log("b>>>",b)
*/

var a  = 10
for(i=0;i<5;i++){
    let b = 20
    console.log(a+b+i)
}

console.log("a>>>",a)
console.log("b>>>",b)




mul(5)(4)(3)

function mul(a){
    var a = a ? a:1
    return function(b){
        var b = b ? b:1
        return function(c){
            var c = c ? c:1
            return a*b*c
        }
    }
}

function mul(a,b,c){
    return a*b*c
}

mul(a)()(c)