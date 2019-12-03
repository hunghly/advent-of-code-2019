"use strict"

// DAY 1 Part I
let moduleInput = [128398,
    118177,
    139790,
    84818,
    75859,
    139920,
    90212,
    74975,
    120844,
    85533,
    77851,
    127044,
    128094,
    77724,
    81951,
    115804,
    60506,
    65055,
    52549,
    108749,
    92367,
    53974,
    52896,
    66403,
    93539,
    118392,
    78768,
    128172,
    85643,
    109508,
    104742,
    71305,
    84558,
    68640,
    58328,
    58404,
    70131,
    73745,
    149553,
    57511,
    119045,
    90210,
    129537,
    114869,
    113353,
    114181,
    130737,
    134877,
    90983,
    84361,
    62750,
    114532,
    139233,
    139804,
    130391,
    144731,
    84309,
    137050,
    79866,
    121266,
    93502,
    132060,
    109190,
    61326,
    58826,
    129305,
    141059,
    143017,
    56552,
    102142,
    110604,
    136052,
    93872,
    71951,
    72954,
    70701,
    137381,
    76580,
    62535,
    62666,
    126366,
    66361,
    109076,
    126230,
    73367,
    94459,
    126314,
    133327,
    143771,
    50752,
    75607,
    117606,
    142366,
    59068,
    75574,
    149836,
    57058,
    77622,
    83276,
    82734];
//Fuel required to launch a given module is based on its mass. Specifically, to find the fuel required for a module, take its mass, divide by three, round down, and subtract 2.
let getFuel = function (mass) {
    return Math.floor(mass / 3) - 2;
};
let getAllFuel = function (modules) {
    let sum = 0;
    modules.forEach(element => {
        sum += getFuel(element);
    });
    return sum;
};

// DAY 1 Part II
let getFuelRecursive = function (initialFuel, totalFuelSum) {
    if (initialFuel <= 0) {
        return totalFuelSum;
    }
    totalFuelSum += initialFuel;
    // console.log("initialFuel is: " + initialFuel);
    // console.log("total fuelSum is: " + totalFuelSum);
    return getFuelRecursive((Math.floor(initialFuel / 3) - 2), totalFuelSum);
};
// console.log(getFuelRecursive(1969, -1969));
let getAllFuelRecursive = function (modules) {
    let sum = 0;
    modules.forEach(element => {
        // pass in -element so it ignores the initial fuel amount
        sum += getFuelRecursive(element, -element);
    });
    return sum;
};
// console.log(getAllFuelRecursive([1969, 100756, 14]));
// console.log(getAllFuelRecursive(moduleInput));
// console.log(getAllFuel(moduleInput));


//DAY 2
// let intCodeArrayBackup = [1,0,0,3,1,1,2,3, 1,3,4,3,1,5,0,3,2,13,1,19,1,10,19,23,1,23,9,27,1,5,27,31,2,31,13,35,1,35,5,39,1,39,5,43,2,13,43,47,2,47,10,51,1,51,6,55,2,55,9,59,1,59,5,63,1,63,13,67,2,67,6,71,1,71,5,75,1,75,5,79,1,79,9,83,1,10,83,87,1,87,10,91,1,91,9,95,1,10,95,99,1,10,99,103,2,103,10,107,1,107,9,111,2,6,111,115,1,5,115,119,2,119,13,123,1,6,123,127,2,9,127,131,1,131,5,135,1,135,13,139,1,139,10,143,1,2,143,147,1,147,10,0,99,2,0,14,0];
let intCodeArray = [1,12,2,3,1,1,2,3, 1,3,4,3,1,5,0,3,2,13,1,19,1,10,19,23,1,23,9,27,1,5,27,31,2,31,13,35,1,35,5,39,1,39,5,43,2,13,43,47,2,47,10,51,1,51,6,55,2,55,9,59,1,59,5,63,1,63,13,67,2,67,6,71,1,71,5,75,1,75,5,79,1,79,9,83,1,10,83,87,1,87,10,91,1,91,9,95,1,10,95,99,1,10,99,103,2,103,10,107,1,107,9,111,2,6,111,115,1,5,115,119,2,119,13,123,1,6,123,127,2,9,127,131,1,131,5,135,1,135,13,139,1,139,10,143,1,2,143,147,1,147,10,0,99,2,0,14,0];

let testArray = [1, 0, 0, 0, 99];
let testArray2 = [2, 3, 0, 3, 99];
let testArray3 = [1, 1, 1, 4, 99, 5, 6, 0, 99];
let testArray4 = [2, 4, 4, 5, 99, 0];

// for (let elem of intCodeArray) {
//     console.log(elem);
// }

let correctProgram = function (intCodeInputArray) {
    let currentIndex = 0;
    let firstVarPosition;
    let secondVarPosition;
    let outputPosition;

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
    return intCodeInputArray;
};

// console.log(correctProgram(testArray));
// console.log(correctProgram(testArray2));
// console.log(correctProgram(testArray3));
// console.log(correctProgram(testArray4));
// console.log(correctProgram(intCodeArray));