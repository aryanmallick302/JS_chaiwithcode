// class user{
//     constructor(username, email, password){
//         this.username = username;
//         this.email = email;
//         this.password = password;
//     }

//     encryptPassword(){
//         return `${this.password}abc`;
//     }

//     uppercase(){
//         // return `${this.username.toUpperCase()}`
//         return this.username.toUpperCase();
//     }
// }

// const chai = new user("chai", "chai@fang.com", 123);
// console.log(chai.encryptPassword());
// console.log(chai.uppercase());

//+++++++++++++++++++++++BEHIND THE SCENE+++++++++++++++++++++++++++++++++
function createUser(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password;
}

createUser.prototype.encryptPassword = function(){
    return `${this.password}abc`;
}

createUser.prototype.userCapital = function(){
    return this.username.toUpperCase();
}
const chai = new createUser("chai", "chai@example.com", "123");
console.log(chai.encryptPassword());
console.log(chai.userCapital());