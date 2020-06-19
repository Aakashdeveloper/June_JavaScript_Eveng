Map
> Help to iterate over the array and play logic
Filter
> Help to filter out the values

var a = [4,6,2,2,66,33,56,33,78,112,32,20,31,12]

var a = [2,4,6,8]
a.map((data) => {console.log(data)})

var a = [2,4,6,8]
a.map((data) => {console.log(data*2)})

var a = [2,4,6,8]
a.map((data) => {return(data*2)})

var a = [4,6,2,2,66,33,56,33,78,112,32,20,31,12]
a.map((data) => {return(data>20)})

var a = [4,6,2,2,66,33,56,33,78,112,32,20,31,12]
a.map((data) => {return(data>20)})
(14) [false, false, false, false, true, true, true, true, true, true, true, false, true, false]

var a = [4,6,2,2,66,33,56,33,78,112,32,20,31,12]
a.filter((data) => {return(data>20)})
(8) [66, 33, 56, 33, 78, 112, 32, 31]
///////////////////////////////
var a = [0,1,2,3,4]
a.map((data) => {return data*2})
(5) [0, 2, 4, 6, 8]
a.filter((data) => {return data*2})
(4) [1, 2, 3, 4]
