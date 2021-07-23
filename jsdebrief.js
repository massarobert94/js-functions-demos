// Create a for loop function that takes an array of numbers and prints out an array of even numbers only

// Function declaration, function expression, arrow function 

// 1. Create a function declaration that takes in the following array of numbers, and returns a new array made up only of the odd numbers

randomNumsArr = [3, 64, 57, 98, 23, 1373, 2498, 12, 23, 540, 31];

function returnOddNums(array) {
    let resultArray = [];
    for (let i = 0; i < array.length; i++ ) {
        if (array[i] % 2 === 1) {
            resultArray.push(array[i]);
        }
    }
    return resultArray;
}
console.log(returnOddNums(randomNumsArr));



// create a function expression that uses arrow function syntax. The function takes in an array of words and returns a new array that only includes words from the input array that are no longer than 5 characters long. You cannot use a for loop, but may only use an iterator method.
// const wordsArray = ['helloo', 'hellooo', 'hello', 'worldd', 'world', 'woorld'];
// const filterShortWords = array => {
//   let resultArray = array.filter(word => {
//     return word.length <= 5;
//   });
//   return resultArray;
// }
// console.log(filterShortWords(wordsArray));



// const filterShortWords = inputArray => {
//   return inputArray.filter(word => word.length <= 5);
// }
// console.log(filterShortWords(wordsArray));




// const filterShortWords = inputArray => inputArray.filter(word => word.length <= 5);
// console.log(filterShortWords(wordsArray));

// 2. Create a function expression using arrow syntax

// array1 = [1, 2, ,3, 4, 5, 6, 7, 8, 9, 10]

// const filterEvenNum = inputArray => inputArray.filter(

// )

// function returnSeconds(minutes) {
//     return (minutes * 60 + ' seconds')
// }
// console.log(returnSeconds(8));

// const age = age => {
//     console.log(age + 3.5)}
    
// age(27);

// Henry is a wonderful yellow labrador that lives in New Hampshire. He is 10 years old. Write a Javascript function that returns his age in dog years. Log this value to the console in the following sentance: "Hankeroo is an excellent dog. He is ___ human years old, which equates to __ dog years."

// let humanYears = 10;
// let dogYears = humanYears * 7;

// console.log('Henry is ' + humanYears + ' years old, which equates to ' + dogYears + ' dog years old.')

// givenArr = [1, 2, 3, 4, 5, 6, 7, 8 ,9];
// function evenNum (array) {
//     let results = [];
//     for (let i= 0; i < array.length; i++)
//         if (array[i] % 2 === 0) {
//             results.push(array[i]);
//         }
//         return results;
// }
// console.log(evenNum(givenArr));

// const givenA = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

// const sixDiv = array => {
//     let results = [];
//     for (let i = 0; i < array.length; i++)
//         if (array[i] % 6 === 0) {
//             results.push(array[i]);
//         }
//         return results;
//     }


// console.log(sixDiv(givenA));






// const twoDig = array => {
//     let results = array.filter(i =>{
//         return i.toString().length === 2;
//     });
//         return results;
//     };

//     console.log(twoDig(givenA));

// create a function expression that uses arrow function syntax. The function takes in an array of words and returns a new array that only includes words from the input array that are no longer than 5 characters long. You cannot use a for loop, but may only use an iterator method.
// const wordsArray = ['helloo', 'hellooo', 'hello', 'worldd', 'world', 'woorld'];
// const filterShortWords = array => {
//   let resultArray = array.filter(word => {
//     return word.length <= 5;
//   });
//   return resultArray;
// }
// console.log(filterShortWords(wordsArray));

//------------------------------------------------------

// const oneDigit = array => {
//     let results = array.filter(i => {
//         return i.toString().length === 1;
//     });
//     return results;
// }
// console.log(oneDigit(givenA));

//-------------------------------------------------------

// const foursDiv = array => {
//     let results = [];
//     for (let i = 0; i < array.length; i++)
//     if (array[i] % 4 === 0) {
//         results.push(array[i]);
//     }
//     return results;
// }
// console.log(foursDiv(givenA));
























// 1. Make a function declaration that takes in a first name parameter and prints "Hello (firstname)" to the console.

// const firstName = ('Hello Carlos')

function firstName (name) {
    return 'Hello ' + name;
}
console.log(firstName('Carlos'));


// 2. Create a function expression that prints "Hello, world. My name is (your name)" to the console.

const anyName = function(name) {
    console.log('Hello world. My name is ' + name);
}

anyName('Lielt');

// 3. Make the previous function an arrow function. Use string interpolation using template literals to log the strings together.

const thisName = name => {
    console.log(`Hello world. My name is ${name}`)
}

thisName('Peace');










// 4. Scope: Cities example:

// let city1 = 'Boston';
// let city2 = 'New York';
// let city3 = 'Miami';
// let city4 = 'Seattle';

// const favoriteCity = () => {
//     // let
//     city4 = 'Denver';
//     let skyscraper = 'Empire State Building'
//     console.log(`${city2} has a beautiful skyline including the ${skyscraper}, but ${city4} has breathtaking mountains.`);
// }
// favoriteCity();
// console.log(city4);
// console.log(skyscraper);