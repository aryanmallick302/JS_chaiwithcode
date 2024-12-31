//if


// if(2 == "2"){
//     console.log("executed");
// }
// if(2 === 2){
//     console.log("will executed");
// }

// const balance = 1000;
// if(balance < 500) console.log("balance is more than 500"); (bad practice)

// if(balance < 500){
//     console.log("balance is less than 500");
// } else if(balance < 750){
//     console.log("balance is less than 750");
// } else if(balance < 900){
//     console.log("balance is less than 900");
// } else{
//     console.log("balance is more than existing condition");
// }

// const UserloggedIn = true;
// const debitCard = true;
// const loggedInFromGoogle = false;
// const loggedInFromEmail = true;

// if(UserloggedIn && debitCard){
//     console.log("Allow to buy course");
// }

// if(loggedInFromGoogle || loggedInFromEmail){
//     console.log("Allowed to login on this website");
    
// }

//SWITCH CASE
// const month = 3;
// switch (month) {
//     case 1:
//         console.log("month is January");
//         break;
    
//     case 2:
//         console.log("month is February");
//         break;
//     case 3:
//         console.log("month is March");
//         break;

//     default:
//         console.log("default case match");
        
//         break;
// }


//FALSY AND TRUTHY VALUES

//falsy values
// false, 0, -0, BigInt, 0n, "", null, undefined, NaN 

//truthy values
// "0", 'false', " ", [], {}, function(){}


// const emptyArray = [];
// if(emptyArray.length === 0){
//     console.log("Array is empty");    
// }

// const emptyObject = {};
// if(Object.keys(emptyObject).length === 0){
//     console.log("Object is empty");    
// }