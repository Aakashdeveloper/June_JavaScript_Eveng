Date()
"Fri Jun 12 2020 19:42:06 GMT+0530 (India Standard Time)"
var a = new Date()
undefined
a.getDate()
12
a.getDay()
5  (1,2,3)
a.getFullYear()
2020
a.getMonth()
5 (0,1,2,3)
a.getTime()
1591971154221

switch(new Date().getDay()){
    case 1:
        console.log('Today is Monday')
        break;
    case 5:
        console.log('Today is Friday')
        break;
    default:
        console.log('Wrong input')
}

