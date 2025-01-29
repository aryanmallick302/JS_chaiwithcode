function setUserName(username){
    this.username = username;
}

function createUserName(username, email, password){
    setUserName.call(this, username)
    this.email = email;
    this.password = password;
}

let user1 = new createUserName("Aryan", "aryan@exammple.com", "123");
console.log(user1);