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
    };

    // checkPassword(245318);
    // checkPassword(111111);
    // checkPassword(223450);
    // checkPassword(123789);
    let totalMetPasswords = 0;
    for (let i = 245318; i <= 765747; i++) {
        if (checkPassword(i)) {
            totalMetPasswords++;
        }
    }
    console.log("Total met passwords is: " + totalMetPasswords);

})();