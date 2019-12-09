"use strict"

//DAY 2
let intCodeArray;
// let intCodeArray = [1,12,2,3,1,1,2,3, 1,3,4,3,1,5,0,3,2,13,1,19,1,10,19,23,1,23,9,27,1,5,27,31,2,31,13,35,1,35,5,39,1,39,5,43,2,13,43,47,2,47,10,51,1,51,6,55,2,55,9,59,1,59,5,63,1,63,13,67,2,67,6,71,1,71,5,75,1,75,5,79,1,79,9,83,1,10,83,87,1,87,10,91,1,91,9,95,1,10,95,99,1,10,99,103,2,103,10,107,1,107,9,111,2,6,111,115,1,5,115,119,2,119,13,123,1,6,123,127,2,9,127,131,1,131,5,135,1,135,13,139,1,139,10,143,1,2,143,147,1,147,10,0,99,2,0,14,0];

let testArray = [1, 0, 0, 0, 99];
let testArray2 = [2, 3, 0, 3, 99];
let testArray3 = [1, 1, 1, 4, 99, 5, 6, 0, 99];
let testArray4 = [2, 4, 4, 5, 99, 0];

// for (let elem of intCodeArray) {
//     console.log(elem);
// }
// console.log(intCodeArray);
let correctProgram = function (intCodeInputArray, noun, verb) {
    let currentIndex = 0;
    let firstVarPosition;
    let secondVarPosition;
    let outputPosition;
    intCodeInputArray[1] = noun;
    intCodeInputArray[2] = verb;

    // if Op Code is 99, then break loop
    while (intCodeInputArray[currentIndex] !== 99) {
        firstVarPosition = intCodeInputArray[currentIndex+1];
        secondVarPosition = intCodeInputArray[currentIndex+2];
        outputPosition = intCodeInputArray[currentIndex+3];
        // if Op Code is 1, then add
        if (intCodeInputArray[currentIndex] === 1) {
            intCodeInputArray[outputPosition] = intCodeInputArray[firstVarPosition] + intCodeInputArray[secondVarPosition];
        }
        // if Op Code is 2, then multiply
        else if (intCodeInputArray[currentIndex] === 2) {
            intCodeInputArray[outputPosition] = intCodeInputArray[firstVarPosition] * intCodeInputArray[secondVarPosition];
        }
        currentIndex +=4;
    }
    return intCodeInputArray[0];
};

// console.log(correctProgram(testArray));
// console.log(correctProgram(testArray2));
// console.log(correctProgram(testArray3));
// console.log(correctProgram(intCodeArray, 0, 0));
let total = 0;

for (let noun = 0; noun <= 99; noun++) {
    for (let verb = 0; verb <= 99; verb++) {
        intCodeArray = [1,2,0,3,1,1,2,3, 1,3,4,3,1,5,0,3,2,13,1,19,1,10,19,23,1,23,9,27,1,5,27,31,2,31,13,35,1,35,5,39,1,39,5,43,2,13,43,47,2,47,10,51,1,51,6,55,2,55,9,59,1,59,5,63,1,63,13,67,2,67,6,71,1,71,5,75,1,75,5,79,1,79,9,83,1,10,83,87,1,87,10,91,1,91,9,95,1,10,95,99,1,10,99,103,2,103,10,107,1,107,9,111,2,6,111,115,1,5,115,119,2,119,13,123,1,6,123,127,2,9,127,131,1,131,5,135,1,135,13,139,1,139,10,143,1,2,143,147,1,147,10,0,99,2,0,14,0];
        total = correctProgram(intCodeArray, noun, verb);
        // console.log(total);
        if (total === 19690720) {
            console.log(`Your noun is ${noun} and your verb is ${verb}.`);
        }
    }
}
// console.log(correctProgram(intCodeArray));


// let correctProgram = function (intCodeInputArray, noun, verb) {
//     let instructionPointer = 0;
//     // let firstVarPosition;
//     // let secondVarPosition;
//     let outputPosition;
//     let total = 0;
//     // if Op Code is 99, then break loop
//     while (intCodeInputArray[instructionPointer] !== 99) {
//         intCodeInputArray[instructionPointer+1] = noun;
//         intCodeInputArray[instructionPointer+2] = verb;
//         // Set the output position to be the value at the third position
//         outputPosition = intCodeInputArray[instructionPointer+3];
//         // if Op Code is 1, then add
//         if (intCodeInputArray[instructionPointer] === 1) {
//             intCodeInputArray[outputPosition] = noun + verb;
//             total += intCodeInputArray[outputPosition];
//         }
//         // if Op Code is 2, then multiply
//         else if (intCodeInputArray[instructionPointer] === 2) {
//             intCodeInputArray[outputPosition] = noun * verb;
//             total += intCodeInputArray[outputPosition];
//         }
//         instructionPointer +=4;
//         console.log(intCodeInputArray[instructionPointer]);
//     }
//     // intCodeInputArray[0] = total;
//     // console.log(intCodeInputArray);
//     console.log("total is " + total);
//     return intCodeInputArray;
// };

// console.log(correctProgram(intCodeArray, 99, 99));