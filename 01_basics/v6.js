let score = "33abc"
console.log( typeof score)
console.log( typeof (score))


let valnum = Number(score)
console.log(valnum)
/* for score = null then 
object
object
0 */

/* for score = 33 then
number
number
33*/

/* for score = "33" then
string
string
33*/

// for score = "33abc "
//string
//string
//NaN

//"33abc" => cannot convert into number so gives Nan
let i = ""
let booli = Boolean(i)
console.log(booli)

/*
=> i = " " space between then true
=> i = "nav" ,so true
=> i = ""  ,so false 
*/


// number to string 

let n = 33
let xn = String (n)
console.log (xn)  //33
console.log(typeof (xn)) //string
