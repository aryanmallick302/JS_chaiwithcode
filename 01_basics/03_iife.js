//Immediately Invoked Function Expressions (IIFE)

//example of non-IIFE
// function code(){
//     console.log(`DBMS CONNECTED`);  
// }
// code();

//example of IIFE
(function chai(){
    //named IIFE
    console.log(`DB CONNECTED`);
})();

//example of IIFE using arrow function
( (name) =>{
    //unnamed IIFE
    console.log(`DBMS CONNECTED ${name}`);
} )("aryan");