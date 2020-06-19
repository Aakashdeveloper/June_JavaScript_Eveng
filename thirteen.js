for
while
do while
for of  
for in  (for objects)
//////////
Map
filter


////////For///////////
for(i=0;i<5;i++){
    console.log(i)
}

var city = ["Delhi", "Prais", "Amsterdam", "Nice", "Helsinki", "Dubai", "Boston"]

for(i=0;i<city.length;i++)
{
    console.log(city[i])
}


var city = ["Delhi", "Paris",[1,2,3], "Amsterdam", "Nice", "Helsinki", "Dubai", "Boston"]

for(i=0;i<city.length;i++){
    if(Array.isArray(city[i])){
        for(j=0;j<city[i].length;j++){
            console.log(city[i][j]);
        }
    }else{
        console.log(city[i]);
    }
    
}


var city = [["Delhi","Mumbai","Chandigarh"],['Paris','Nice','Cannas'],['Amsterdam','Da Hug']]
for(i=0;i<city.length;i++){
    if(Array.isArray(city[i])){
        for(j=0;j<city[i].length;j++){
            console.log(city[i][j]);
        }
    }else{
        console.log(city[i]);
    }
    
}

Delhi - India
Mumbai - India
Chandigarh - India
Paris - France
Nice - France
Cannas - France
Amsterdam - Netherlands
DaHug - Netherlands


////////While///////////
var i =10;
while(i<5){
    console.log(i);
    i++
}

///////DoWhile/////
var i =10;
do{
    console.log(i);
    i++
}
while(i<5);


/////////////////////////////////
var colors = ["Red","Yellow","Green","Orange"]
for(abc of colors){
    console.log(abc)
}

var colors = ["Red","Yellow","Green","Orange"]
for(abc of colors){
    console.log(abc)
}
VM156:3 Red
VM156:3 Yellow
VM156:3 Green
VM156:3 Orange


var colors = ["Red","Yellow","Green","Orange"]
colors[2]