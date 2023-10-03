/*
Question #1

Write a function that takes a string and an array of strings ( in this example dog_names) and checks if one of the list members (dog names) is in the string . Return an array of the dog names found in the array

Hint : filter, includes
Resources: Array.prototype.includes() - JavaScript | MDN
Examples:

var dogNames = ["Max","Fido","Gizmo","Nala"]

//Test Cases
var testString1 = "Hello, my dog is Max, and they have purple eyes!"
//Expect ['Max']

var testString2 = "My Dog is fast, her name is Tippi"
//Expect []

var testString3 = "Come here Fido and Gizmo come here"
//Expect['Fido','Gizmo']
*/

var dogNames = ['Max', 'Fido', 'Gizmo', 'Nala']
var testString1 = "Hello, my dog is Max, and they have purple eyes!"
var testString2 = "My Dog is fast, her name is Tippi"
var testString3 = "Come here Fido and Gizmo come here"

function findDogNames(aString, anArray){
    const foundNames = []
    for(let i =0; i < anArray.length; i++) {
        if (aString.includes(anArray[i])) {
            foundNames.push(anArray[i])
        }
    }
    return console.log(foundNames)
}

console.log(findDogNames(testString1, dogNames))
console.log(findDogNames(testString2, dogNames))
console.log(findDogNames(testString3, dogNames))

//====================================================================================================================================================================

/*
Question #2

Write a function using a for loop to convert an array of numbers from inches to feet.

Example: 

var heightsInInches = [66, 64, 60, 52, 72, 80, 51]
// Expects:
[ 5.5, 5.333333333333333, 5, 4.333333333333333, 6, 6.666666666666667, 4.25 ]
*/

var heightsInInches = [66, 64, 60, 52, 72, 80, 51]

function inchesToFeet(anArray) {
    convertedArray = []
    for(let i = 0; i < anArray.length; i++) {
        convertedArray.push(anArray[i]/12)
    }
    return console.log(convertedArray)
}

console.log(inchesToFeet(heightsInInches))

//====================================================================================================================================================================


/*
Question #3

Using a for loop (or for extra challenge the Ternary Operator and Map), create an array that adds ‘is eating pizza’ to every name from the array ‘tmnt’ that ends with ‘o’ and add ‘is being rude’ to any other name

Example:


var tmnt = ["Leonardo", "Michelangelo", "Donatello", "Raphael"]
// Expects:
[
'Leonardo is eating pizza',
'Michelangelo is eating pizza',
'Donatello is eating pizza',
'Raphael is being rude'
]

*/

var tmnt = ["Leonardo", "Michelangelo", "Donatello", "Raphael"]

function tmntEatingOrRude(anArray) {
    for(let i = 0; i < anArray.length; i++) {
        if (anArray[i][anArray[i].length-1].includes('o')) {
            anArray[i] = anArray[i] + ' is eating pizza'
        } else {
            anArray[i] = anArray[i] + ' is being rude'
        }
    }
    return anArray
}

console.log(tmntEatingOrRude(tmnt))
//====================================================================================================================================================================

/*
Question #4

Write an arrow function to find the max number in a list. Do not use the Math.max function. The list will be all positive numbers.

Example:

var findAMax=[123,5436,45784,1234,34,65,234125,645,3452,13216,49]
// Expects
// 234125
*/

var findAMax=[123,5436,45784,1234,34,65,234125,645,3452,13216,49]

console.log(findAMax.sort(function(a,b){
    return a-b
}))

const arrowMaxNumber = (aList) => aList.sort(function(a,b){})[aList.length-1]

console.log(arrowMaxNumber(findAMax))

/*
// 
// Counting sheep...
codewars problem 1: https://www.codewars.com/kata/54edbc7200b811e956000556

// Convert a String to a Number!
codewars problem 2: https://www.codewars.com/kata/544675c6f971f7399a000e79

// Complementary DNA
codewars problem 3:https://www.codewars.com/kata/554e4a2f232cdd87d9000038

*/


// codewars solution 1:

function countSheeps(sheep) {
    console.log(sheep)
    let counter = 0
    console.log(counter)
    for (let i = 0; i < sheep.length; i++) {
      if (sheep[i]) {
        counter += 1
        console.log(counter)
      }
    }
    console.log(counter)
    return counter
  }

// codewars solution 2:

const stringToNumber = function(str){
    str = parseInt(str)
    return str;
  }


// codewars solution 3:
function DNAStrand(dna){
    console.log(dna)
    compDNA = ''
    for (let i = 0; i < dna.length; i++) {
      if (dna[i].includes('A')) {
        compDNA += 'T'
      } else if (dna[i].includes('T')) {
        compDNA += 'A'
      } else if (dna[i].includes('C')) {
        compDNA += 'G'
      } else {
        compDNA += 'C'
      }
    }
    return compDNA
  }