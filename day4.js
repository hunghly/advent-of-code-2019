(function () {
    "use strict"
    /*However, they do remember a few key facts about the password:

It is a six-digit number.
The value is within the range given in your puzzle input.
Two adjacent digits are the same (like 22 in 122345).
Going from left to right, the digits never decrease; they only ever increase or stay the same (like 111123 or 135679).

Other than the range rule, the following are true:
111111 meets these criteria (double 11, never decreases).
223450 does not meet these criteria (decreasing pair of digits 50).
123789 does not meet these criteria (no double).
How many different passwords within the range given in your puzzle input meet these criteria?

Your puzzle input is 245318-765747.*/
    /* WORKING CODE FOR PART I

    let checkPassword = function (password) {
        let hasAdjacent = false;
        let doesNotDecrease = true;
        let stringPassword = password.toString();
        for (let i = 1; i < stringPassword.length; i++) {
            // console.log(stringPassword[i] + " Y ");
            // Check to see if number is decreasing
            if (stringPassword[i] < stringPassword[i-1]) {
                doesNotDecrease = false;
                // console.log(`Numbers ${stringPassword[i-1]} to ${stringPassword[i]} decreases for the number ${stringPassword}.`);
            }
            if (stringPassword[i] === stringPassword[i-1]) {
                hasAdjacent = true;
                // console.log(`Numbers ${stringPassword[i-1]} to ${stringPassword[i]} are adjacent for the number ${stringPassword}.`)
            }
        }
        if (hasAdjacent && doesNotDecrease) {
            // console.log(`${stringPassword} meets the criteria.`);
            return true;
        } else {
            return false;
        }
    };*/

    // checkPassword(245318);
    // checkPassword(111111);
    // checkPassword(223450);
    // checkPassword(123789);
    /*        let totalMetPasswords = 0;
            for (let i = 245318; i <= 765747; i++) {
                if (checkPassword(i)) {
                    totalMetPasswords++;
                }
            }
        console.log("Total met passwords is: " + totalMetPasswords);*/


    /*An Elf just remembered one more important detail: the two adjacent matching digits are not part of a larger group of matching digits.

    Given this additional criterion, but still ignoring the range rule, the following are now true:

    112233 meets these criteria because the digits never decrease and all repeated digits are exactly two digits long.
    123444 no longer meets the criteria (the repeated 44 is part of a larger group of 444).
    111122 meets the criteria (even though 1 is repeated more than twice, it still contains a double 22).

    How many different passwords within the range given in your puzzle input meet all of the criteria?

    Your puzzle input is still 245318-765747.*/

    // Day 4 Part II Answer
    let checkPassword = function (password) {
        let hasAdjacent = false;
        let doesNotDecrease = true;
        let stringPassword = password.toString();
        let target;
        let regExp;
        let found;
        for (let i = 1; i < stringPassword.length; i++) {
            // Check to see if number is decreasing
            if (stringPassword[i] < stringPassword[i - 1]) {
                doesNotDecrease = false;
                // console.log(`Numbers ${stringPassword[i-1]} to ${stringPassword[i]} decreases for the number ${stringPassword}.`);
            }
            // Check to see if numbers are adjacent
            if (stringPassword[i] === stringPassword[i - 1]) {
                target = stringPassword[i];
                regExp = new RegExp(target, 'g');
                found = stringPassword.match(regExp);
                // if matched letters are less than or equal to two, set hasAdjacent to true
                if (found.length <= 2) {
                    hasAdjacent = true;
                }
            }
        }
        if (hasAdjacent && doesNotDecrease) {
            // console.log(`${stringPassword} meets the criteria.`);
            return true;
        } else {
            return false;
        }
    };

    console.log(checkPassword(112233)); // true
    console.log(checkPassword(123444)); // false
    console.log(checkPassword(111122)); // true
    console.log(checkPassword(245318)); // false
    console.log(checkPassword(111111)); // true
    console.log(checkPassword(223450)); // false
    console.log(checkPassword(123789)); // false

    let totalMetPasswords = 0;
    for (let i = 245318; i <= 765747; i++) {
        if (checkPassword(i)) {
            totalMetPasswords++;
            console.log(i);
        }
    }
    console.log("Total met passwords is: " + totalMetPasswords);

})();