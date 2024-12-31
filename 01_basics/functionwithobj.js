function calculateCartPrice(...num1){
    // console.log(num1);
    return num1;
}

(console.log(calculateCartPrice(4,62, 500)));

const user = {
    username : "aryan", 
    price : 999
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}

// handleObject(user);
handleObject({
    username: "aryan",
    price : 399
})

const newArray = [200, 400, 600, 100];

function returnSecondValue(getArray){
    return getArray[1];
}

console.log(returnSecondValue(newArray));