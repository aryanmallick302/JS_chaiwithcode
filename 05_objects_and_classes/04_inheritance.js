class User{
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`USERNAME IS : ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username);
        this.email = email;
        this.password = password;
    }

    addcourse(){
        console.log(`Course has been added by ${this.username}`);
    }
}

const chai = new Teacher("chai", "chai@example.com", "123");
const aryan = new Teacher("aryan", "aryan@example.com", "302");
const masalaChai = new User("aryan");

// console.log(masalaChai.addcourse());
// console.log(chai === masalaChai);
console.log(aryan.addcourse());
console.log(chai.addcourse());

console.log(aryan instanceof Teacher);
console.log(masalaChai instanceof User);
console.log(aryan instanceof User)