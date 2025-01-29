// const getUser = {
//     name: "aryan",
//     email: "aryan@example.com",
//     phone: 9042376832,

//     userDetail : function(){
//         console.log(this.name);
//     }

// }
// console.log(getUser.userDetail())
// console.log(this.name);


function user(username, isLoggedIn, loginCount){
    this.username = username;
    this.isLoggedIn = isLoggedIn;
    this.loginCount = loginCount;

    // return this;
}

const userOne = new user("Aryan", true, 12);
const userTwo = new user("Chai", false, 11);
const userThree = new user("Code", false, 15);

console.log(userOne);
console.log(userTwo);
console.log(userThree);

