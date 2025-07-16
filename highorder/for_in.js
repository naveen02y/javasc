const myobject ={
    'game1':'nav',
    'game2':'spy'
}
// for (const [key] of myobject) {
//     //console.log(key)
// }//TypeError: myobject is not iterable

// so we use for in loop to iterate
// 
// for (const key in object) {
//     if (Object.prototype.hasOwnProperty.call(object, key)) {
//         const element = object[key];
        
//     }
// }

for (const key in myobject) {
    // console.log(key)
}
// g1
// g2

for (const [key,value] in myobject) {
    // console.log(key,value)
}
//for...in doesn't work with destructuring like [key, value].


// Using Object.entries() with for...of:
// 
// 
for (const [key, value] of Object.entries(myobject)) {
    // console.log(key, value);
}
// game1 nav
// game2 spy

// for in for array
const prog = ['js','rb','c','java']

for (const key in prog) {
    //console.log(key);
// 0
// 1
// 2
// 3
}
// for values of arrayt using forin
for (const key in prog) {
    // console.log(prog[key]);
}
// js
// rb
// c
// java

const map = new Map()
map.set('in',india)
map.set('fr',france)

for (const key in map) {
    //console.log(key);
    // not iteratble 
}


// genral we use forof [arrays,map]
//forin for [objects]