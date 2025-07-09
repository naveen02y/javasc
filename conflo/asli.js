const balance = 100

//these are control flow
// if else
// if(balance >200 ){
//     console.log("good")

// }
// // above if{} is normal scope 
// for single line it our wish to use { } or not


// implicit scope
// if ( balance >100) console.log("ok")

// multiple conditions 
// if,else if ,else


// <,>,<=,>=

const userlogin = true
const debitcard = true
//mutiple conditions in single conditions
// if( userlogin && debitcard){
//     console.log("allow")
// }

// mutiple conditions if,elseif,else if ......
// then we use switch case


const month =3 
// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

switch (month) {
    case 1:
        console.log("jan");
        break;
    case 2:
        console.log("feb");
        break;
    case 3:
        console.log("mar");
        break;
    case 4:
        console.log("apr");

        break;

    default:
        console.log("not matched");
        break;
}


// if break not used

/// truthy or falsy 

// flasy == false,0,-0,"",null,undefined,NaN, BigInt  
// truthy == "0",'flase' ," ", [],{},function(){}


//  const user = []

//  if(user.length === 0){
//     console.log("empty array")
//  }

//  //checking the object is empty or not 
// const emptyobj = {}
// if(Object.keys(emptyobj).length === 0){
//     console.log("empty object")
// }


//nullish coalescing  operator ?? null undefined

//why we use when take valuse 
//from database some it can be null or undefined 
// let v1 = 5??10 //5  //
// here 10 came from any member function usually thats why we use
 // let v1 = null ?? 5 // 5
//let v1 = 5 ?? null //error


//smae for undefined 


//
// console.log(v1);

// terniary operator 

// condition ? true_statement : false_statement

const teaprice = 100
teaprice <=80 ? console.log("lessthan 80"):console.log("greater than 80 ")
