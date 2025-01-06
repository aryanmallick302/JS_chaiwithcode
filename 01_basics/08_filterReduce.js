// const myNum = [1, 2, 3, 4, 5];

// //filter comes with call back function
// // const newNum = myNum.filter( (num) => num > 4 ); another way
// const newNum = myNum.filter ( (num) => {
//     return num > 4;
// } )
// console.log(newNum);

// const books = [
//     { title: 'Book one', genre: 'Non-fiction', publish: 1991, edition: 2010 },
//     { title: 'Book two', genre: 'fiction', publish: 1996, edition: 2008 },
//     { title: 'Book three', genre: 'history', publish: 1984, edition: 2000 },
//     { title: 'Book four', genre: 'Non-fiction', publish: 1999, edition: 2005 },
//     { title: 'Book five', genre: 'science', publish: 2000, edition: 2018 },
//     { title: 'Book six', genre: 'Non-fiction', publish: 2005, edition: 2015 },
//     { title: 'Book seven', genre: 'Non-fiction', publish: 2003, edition: 2010 },
// ];

// const userBooks = books.filter( (bk) => bk.genre == 'Non-fiction' )

// const userBooks = books.filter( (book) => book.edition > 2010 );
// const bookPublish = books.filter ((book) => book.publish > 1990); one way of writing this
 //  const bookPublish = books.filter ( (book) => {return book.publish > 2000} ); another way of writing above line

// console.log(bookPublish);

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//MAPS

// const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const names = ["ALICE", "BOB", "CHARLEY" , "DELTA"];

// const newNames = names.map( (name) => name.toLowerCase());
// const newNames = names.map( (name) => name.toLocaleUpperCase());
// console.log(newNames);


// const newNums = myNumbers.map( (num) => num + 10 );
// const newNums = myNumbers.forEach((num) => {console.log(num + 10)});
// console.log(newNums);

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//reduce function  
const myNums = [1, 2, 3];

// const myTotal = myNums.reduce( function (acc, currVal) {       in a function way
//     console.log(`acc : ${acc} and currVal : ${currVal}`);    
//     return acc + currVal;
// }, 0 );


const myTotal = myNums.reduce( (acc, currVal) => {
    console.log(`acc: ${acc} and currVal : ${currVal}`);
    return acc + currVal;
},0)
console.log(myTotal);

const shoppingCart = [
    {
        itemName : "js course",
        price : 2999,
    },
    {
        itemName : "c++ course",
        price : 3999,
    },
    {
        itemName : "python course",
        price : 1999,
    },
    {
        itemName : "MERN course",
        price : 6999,
    }
]

const totalItem = shoppingCart.reduce( (acc , item) => acc + item.price, 0)
console.log(totalItem);
