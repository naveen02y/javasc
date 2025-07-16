// forecah is property of array 
// u can see in console of chrome  something array 
// prototypes

const coding = ['js','ruby','c','java']

// method 1
// u can see properties by coding.(dot)

coding.forEach( function (item){
    //console.log(item);
})
// js
// ruby
// c
// java

// function (item){
//     console.log(item);
// } this the function of something we dont nee d name && we dont use here 
// we can use array function also

//methos 2
coding.forEach((item)=>{
   // console.log(item)
})//same output 

// method 3

function greet(i){
    console.log(i)
    //greet = name
    // i = parameter
    // consoling parameter
}
// this above function we can get
//coding.forEach(greet)// this is also one method\
// same soln in 1,2,3 


// generaly to rtake input/or data from database we get array which has objects as elements

const c =[

    {
        languagename : 'javascript',
        shortcut :'js'
    },
    {
languagename : 'ruby',
        shortcut :'rb'
    },

    {
    languagename : 'java',
        shortcut :'java'
    }
]
c.forEach((item)=>{
    console.log(item.languagename);
    
})



