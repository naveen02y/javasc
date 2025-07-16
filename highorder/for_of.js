const a =[1,2,3,4,5,6]

// 
// for (const element of object) {
    
// }
for (const i of a) {
    //console.log(i)
    
}
//output 
// 
// 1
// 2
// 3
// 4
// 5
// 6


const map = new Map();
map.set('in','india')
map.set('fr','france')

//console.log(map);//Map(2) { 'in' => 'india', 'fr' => 'france' }

for (const key of map) {
    //console.log(key)
    
} //[ 'in', 'india' ]
//[ 'fr', 'france' ]



for (const [key] of map) {
    // console.log(key)
    
} //in
// fr

for (const [key,value] of map) {
   // console.log(key)
}
 //in
// fr


for (const [key,value] of map) {
    // console.log(key,';',value)
}
// in ; india
// fr ; france


//  for object we using forof
// we cant use the same syntax for object its is ok with the maps

const myo ={
    'g1' :'nn',
    'g2':'nnn'
}

// for (const [key,value] of myo) {
//     console.log(key)
// }
// TypeError: myo is not iterable