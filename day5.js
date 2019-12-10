(function () {
    "use strict"
    let intCodeArray = [3, 225, 1, 225, 6, 6, 1100, 1, 238, 225, 104, 0, 1101, 61, 45, 225, 102, 94, 66, 224, 101, -3854, 224, 224, 4, 224, 102, 8, 223, 223, 1001, 224, 7, 224, 1, 223, 224, 223, 1101, 31, 30, 225, 1102, 39, 44, 224, 1001, 224, -1716, 224, 4, 224, 102, 8, 223, 223, 1001, 224, 7, 224, 1, 224, 223, 223, 1101, 92, 41, 225, 101, 90, 40, 224, 1001, 224, -120, 224, 4, 224, 102, 8, 223, 223, 1001, 224, 1, 224, 1, 223, 224, 223, 1101, 51, 78, 224, 101, -129, 224, 224, 4, 224, 1002, 223, 8, 223, 1001, 224, 6, 224, 1, 224, 223, 223, 1, 170, 13, 224, 101, -140, 224, 224, 4, 224, 102, 8, 223, 223, 1001, 224, 4, 224, 1, 223, 224, 223, 1101, 14, 58, 225, 1102, 58, 29, 225, 1102, 68, 70, 225, 1002, 217, 87, 224, 101, -783, 224, 224, 4, 224, 102, 8, 223, 223, 101, 2, 224, 224, 1, 224, 223, 223, 1101, 19, 79, 225, 1001, 135, 42, 224, 1001, 224, -56, 224, 4, 224, 102, 8, 223, 223, 1001, 224, 6, 224, 1, 224, 223, 223, 2, 139, 144, 224, 1001, 224, -4060, 224, 4, 224, 102, 8, 223, 223, 101, 1, 224, 224, 1, 223, 224, 223, 1102, 9, 51, 225, 4, 223, 99, 0, 0, 0, 677, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1105, 0, 99999, 1105, 227, 247, 1105, 1, 99999, 1005, 227, 99999, 1005, 0, 256, 1105, 1, 99999, 1106, 227, 99999, 1106, 0, 265, 1105, 1, 99999, 1006, 0, 99999, 1006, 227, 274, 1105, 1, 99999, 1105, 1, 280, 1105, 1, 99999, 1, 225, 225, 225, 1101, 294, 0, 0, 105, 1, 0, 1105, 1, 99999, 1106, 0, 300, 1105, 1, 99999, 1, 225, 225, 225, 1101, 314, 0, 0, 106, 0, 0, 1105, 1, 99999, 1008, 677, 226, 224, 102, 2, 223, 223, 1006, 224, 329, 101, 1, 223, 223, 108, 677, 677, 224, 102, 2, 223, 223, 1005, 224, 344, 101, 1, 223, 223, 107, 677, 677, 224, 1002, 223, 2, 223, 1005, 224, 359, 101, 1, 223, 223, 1107, 226, 677, 224, 1002, 223, 2, 223, 1005, 224, 374, 1001, 223, 1, 223, 1008, 677, 677, 224, 102, 2, 223, 223, 1006, 224, 389, 1001, 223, 1, 223, 1007, 677, 677, 224, 1002, 223, 2, 223, 1006, 224, 404, 1001, 223, 1, 223, 8, 677, 226, 224, 102, 2, 223, 223, 1005, 224, 419, 1001, 223, 1, 223, 8, 226, 226, 224, 102, 2, 223, 223, 1006, 224, 434, 101, 1, 223, 223, 1107, 226, 226, 224, 1002, 223, 2, 223, 1006, 224, 449, 101, 1, 223, 223, 1107, 677, 226, 224, 102, 2, 223, 223, 1005, 224, 464, 101, 1, 223, 223, 1108, 226, 226, 224, 102, 2, 223, 223, 1006, 224, 479, 1001, 223, 1, 223, 7, 677, 677, 224, 1002, 223, 2, 223, 1006, 224, 494, 101, 1, 223, 223, 7, 677, 226, 224, 102, 2, 223, 223, 1005, 224, 509, 101, 1, 223, 223, 1108, 226, 677, 224, 1002, 223, 2, 223, 1006, 224, 524, 101, 1, 223, 223, 8, 226, 677, 224, 1002, 223, 2, 223, 1005, 224, 539, 101, 1, 223, 223, 1007, 226, 226, 224, 102, 2, 223, 223, 1006, 224, 554, 1001, 223, 1, 223, 108, 226, 226, 224, 1002, 223, 2, 223, 1006, 224, 569, 1001, 223, 1, 223, 1108, 677, 226, 224, 102, 2, 223, 223, 1005, 224, 584, 101, 1, 223, 223, 108, 226, 677, 224, 102, 2, 223, 223, 1005, 224, 599, 101, 1, 223, 223, 1007, 226, 677, 224, 102, 2, 223, 223, 1006, 224, 614, 1001, 223, 1, 223, 1008, 226, 226, 224, 1002, 223, 2, 223, 1006, 224, 629, 1001, 223, 1, 223, 107, 226, 226, 224, 1002, 223, 2, 223, 1006, 224, 644, 101, 1, 223, 223, 7, 226, 677, 224, 102, 2, 223, 223, 1005, 224, 659, 1001, 223, 1, 223, 107, 677, 226, 224, 102, 2, 223, 223, 1005, 224, 674, 1001, 223, 1, 223, 4, 223, 99, 226];

    let calculateParameters = function (opCode, firstVar, secondVar, firstParamMode, secondParamMode, intCodeInputArray, currentIndex) {
        let total;
        let outputPos;

        // Add based on parameter modes
        if (opCode === "1") {
            if (firstParamMode === "0" && secondParamMode === "0") {
                total = intCodeInputArray[firstVar] + intCodeInputArray[secondVar];
            }
            else if (firstParamMode === "1" && secondParamMode === "0") {
                total = firstVar + intCodeInputArray[secondVar];
            }
            else if (firstParamMode === "0" && secondParamMode === "1") {
                total = intCodeInputArray[firstVar] + secondVar;
            }
            else if (firstParamMode === "1" && secondParamMode === "1") {
                total = firstVar + secondVar;
            }
        }
        // Multiply based on parameter modes
        else if (opCode === "2") {
            if (firstParamMode === "0" && secondParamMode === "0") {
                total = intCodeInputArray[firstVar] * intCodeInputArray[secondVar];
            }
            else if (firstParamMode === "1" && secondParamMode === "0") {
                total = firstVar * intCodeInputArray[secondVar];
            }
            else if (firstParamMode === "0" && secondParamMode === "1") {
                total = intCodeInputArray[firstVar] * secondVar;
            }
            else if (firstParamMode === "1" && secondParamMode === "1") {
                total = firstVar * secondVar;
            }
        }
        // Opcode 3, so ask for input
        else if (opCode === "3") {
            total = prompt("Please enter your input.");
            outputPos = intCodeInputArray[currentIndex+1];
            intCodeInputArray[outputPos] = Number(total);
        }
        // Opcode 4, just output the value at parameter location
        else if (opCode === "4") {
            outputPos = intCodeInputArray[currentIndex+1];
            total = intCodeInputArray[outputPos];
        }
        console.log(intCodeInputArray);
        console.log("Your total is: " + total);
    };

    let correctProgram = function (intCodeInputArray) {
        let currentIndex = 0;
        let opCodeString;
        let opCode;
        let firstParamMode;
        let secondParamMode;
        let thirdParamMode;

        let firstVar;
        let secondVar;
        let outputPosition;

        for (let i = 0; i < 1; i++) {
            // Check the OpCode by padding the opCode with leading zero's
            opCodeString = intCodeInputArray[i].toString().padStart(5, "0");
            opCode = opCodeString.slice(opCodeString.length - 1);
            firstParamMode = opCodeString.slice(opCodeString.length - 3, opCodeString.length - 2);
            secondParamMode = opCodeString.slice(opCodeString.length - 4, opCodeString.length - 3);
            thirdParamMode = opCodeString.slice(opCodeString.length - 5, opCodeString.length - 4);

            console.log("opCode String " + opCodeString);
            console.log("opCode " + opCode);
            console.log("first Param " + firstParamMode);
            console.log("second Param " + secondParamMode);
            console.log("third Param " + thirdParamMode);
            // OpCode is 01
            firstVar = intCodeInputArray[i + 1];
            secondVar = intCodeInputArray[i + 2];
            // Calculate
            calculateParameters(opCode, firstVar, secondVar, firstParamMode, secondParamMode, intCodeInputArray, currentIndex);
            if (opCode === "1" || opCode === "2") {
                currentIndex+=4;
            } else if (opCode === "3" || opCode === "4") {
                currentIndex+=2;
            }
        }

        /*// if Op Code is 99, then break loop
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
        }*/
        return intCodeInputArray[0];
    };


/*
    let testArray = [1, 4, 3, 4, 33];
    console.log(correctProgram(testArray));
    let testArray2 = [101, 4, 3, 4, 33];
    console.log(correctProgram(testArray2));
    let testArray3 = [1001, 4, 3, 4, 33];
    console.log(correctProgram(testArray3));
    let testArray4 = [1101, 4, 3, 4, 33];
    console.log(correctProgram(testArray4));

    let testArray6 = [2, 4, 3, 4, 33];
    console.log(correctProgram(testArray6));
    let testArray7 = [102, 4, 3, 4, 33];
    console.log(correctProgram(testArray7));
    let testArray8 = [1002, 4, 3, 4, 33];
    console.log(correctProgram(testArray8));
    let testArray9 = [1102, 4, 3, 4, 33];
    console.log(correctProgram(testArray9));
*/

    // let testArray10 = [3, 2, 4, 4, 6, 6, 1100];
    // console.log(correctProgram(testArray10));

    // let testArray11 = [4, 2, 1, 1, 6, 6, 1100];
    // console.log(correctProgram(testArray11));

})();