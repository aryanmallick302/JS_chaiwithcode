//for of 

// const arr = [1, 2, 3, 4, 5];

// for (const num of arr) {
//     console.log(num);
    
// }

// const greetings = "Hello world";
// for (const greet of greetings) {
//     console.log(`Each char is ${greet}`);
    
// }

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//Map

const map = new Map()
map.set('IN' , "INDIA")
map.set('USA' , "United States of America")
map.set('FR' , "France")

// console.log(map);
//now w'll try to apply loop on map

// for (const [key, value] of map) {
//     // console.log(key+ ':-'+ value);
//     console.log(key, ':-' , value);   
    
// }

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//for In loop

// const myObject = {
//     js : 'javascript',
//     cpp : 'c++',
//     rb : 'ruby',
//     swift : 'swift by apple'
// }
// for(const key in myObject){
//     // console.log(key , ':-' , value);    wrong way
//     console.log(` ${key}  = ${myObject[key]}`);
// }

// const myArray = ["flash", "batman", "ironman", "thor"];
// for(const key in myArray){
//     console.log(myArray[key]);
    
// }

// const coding = ["js", "python", "ruby", "cpp"];
// coding.forEach(function (item){
//     // console.log(item);
// })
// coding.forEach((val) =>{
//        console.log(val);
// })
// coding.forEach((item, index, arr) => {
//     console.log(item, index, arr);    
// })

const myCoding = [
    {
        languageName : "javascript",
        languageFileName : "js"
    },
    {
        languageName : "python",
        languageFileName : "py"
    },
    {
        languageName : "ruby",
        languageFileName : "rb"
    }
];
myCoding.forEach((item) => {
    console.log(item.languageName);
    
})