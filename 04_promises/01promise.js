//way to create a promise
const promiseOne = new Promise(function(resolve, reject){
    setTimeout(()=>{
        console.log("Async task is completed");
        resolve();
    }, 1000);
}); 

//then() and resolve() are interconnected. but to actually connect them we have to add resolve method in promise creation so that it can get connected to then()
promiseOne.then(function(){
    console.log("promise consumed");
    
})
// console.log(promiseOne);

new Promise(function(resolve, reject){
    setTimeout(function(){
    console.log("async task 2");
    resolve();
    }, 1000)
       
}).then(function(){
    console.log("async task 2 solved");
    
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("async 3 task is scheduling");
        resolve({username : "aryan", email: "aryan@mallick.com"});        
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user);    
    console.log("async task 3 is solved"); 
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username : "Aryan", email : "aryanmallick.office@gmail.com"})
        }else{
            reject('ERROR : Something went wrong');
        }
    }, 1000)
})
promiseFour.then((user) => {
    console.log(user);
    return user.email;
    
}).
then((email)=>{
    console.log(email);
    
}).
catch((error) => {
    console.log(error);    
}).
finally(() => console.log("Finally the promise either rejected or resolved"));



const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username : "JS", password : "123"});
        }else{
            reject("ERROR : JS went wrong");
        }
    }, 1000)
})

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive();

// async function getUserData(){
//    try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users');
//     const data = await response.json();
//     console.log(data);
//    } catch (error) {
//     console.log("E : ", error);
//    }
// }
// getUserData();

fetch("https://jsonplaceholder.typicode.com/users")
.then((response) =>{
    return response.json();
})
.then((data) => console.log(data))
.catch((error) => console.log(error));