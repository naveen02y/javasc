 const array =[10,9,8,7,6] 

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    //console.log(element);
    
}
// break and continue 

for (let  i=0 ;i<= 20 ;i++){

if(i ==5){
    console.log(`detected 5`)
    break;
}


console.log(`value of i is ${i}`);

}
for (let  i=0 ;i<= 20 ;i++){

if(i ==5){
    console.log(`detected 5`)
    continue;
    // just we get out of 5 if 5 ==i then we dont go for statement when i==5 
}


console.log(`value of i is ${i}`);

}