7557

var palindrom =(data) => {
    var rem,temp,final=0;
    temp=data;
    while(data>0){
        rem = data%10;
        data=parseInt(data/10)
        final = final*10+rem
    }
    if(final==temp){
        console.log("Number is Palindrom")
    }else{
        console.log("Number is not palindrom")
    }
}