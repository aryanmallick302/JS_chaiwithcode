function createUser(username, score){
    this.username = username;
    this.score = score;
}

// console.log(createUser.prototype);
createUser.prototype.printMe = function(){
    console.log(`price is : ${this.score}`);
}

createUser.prototype.increament = function(){
    score ++;
}

const chai = new createUser("chai", 25);
const tea = createUser("tea", 45);
chai.printMe();
// console.log(chai.increament)
