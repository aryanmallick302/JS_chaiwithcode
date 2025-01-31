class user{
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`USERNAME IS: ${this.username}`);
    }

    static createId(){    //if i want to not give access to this property explicitly of this class then i wll add static keyword 
        return `123`;
    }
}

class Teacher extends user{
    constructor(username, email){
        super(username)
        this.email = email;
    }
}

const userOne = new Teacher("mallick", "aryan@example.com");
userOne.logMe();
console.log(userOne.createId());

// const userOne = new user("aryan");
// console.log(userOne.createId());
// userOne.logMe();