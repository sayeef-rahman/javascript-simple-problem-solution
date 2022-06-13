//Problem 1 Solution
function anaToVori(ana) {
    if (typeof ana == 'number') {
        return parseFloat(ana / 16);
    }
    else {
        return 'Enter a Valid Number!';
    }
}
console.log(anaToVori(25));
//Problem 2 Solution
function pandaCost(singara, somucha, jilapi) {
    let singaraPrice = 7;
    let somuchaPrice = 10;
    let jilapiPrice = 15;
    if (typeof singara == "number" && typeof somucha == "number" && typeof jilapi == "number") {
        if (Math.floor(singara) == Math.ceil(singara) && Math.floor(somucha) == Math.ceil(somucha) && Math.floor(jilapi) == Math.ceil(jilapi)) {
            const totalPrice = (singara * singaraPrice) + (somucha * somuchaPrice) + (jilapi * jilapiPrice);
            return parseFloat(totalPrice);
        }
        else {
            return 'Do Not Use Fraction Number!';
        }
    }
    else {
        return 'Enter Valid Number!';
    }
}
console.log(pandaCost(2, 5, 14));
//Problem 3 Solution
function picnicBudget(numberOfPeople) {
    let budget = 0;
    if (typeof numberOfPeople == 'number') {
        if (Math.ceil(numberOfPeople) == Math.floor(numberOfPeople)) {
            if (numberOfPeople <= 100) {
                budget = numberOfPeople * 5000;
                return budget;
            }
            else if (numberOfPeople <= 200) {
                budget = numberOfPeople * 4000;
                return budget;
            }
            else if (numberOfPeople > 200) {
                budget = numberOfPeople * 3000;
                return budget;
            }
            else {
                return 'Enter Valid Quantity';
            }
        }
        else {
            return 'Do Not Use Fraction!';
        }
    }
    else {
        return 'Enter Valid Number!';
    }
}
console.log(picnicBudget(201));
//Problem 4 Solution
function oddFriend(friendsName) {
    if (typeof friendsName == 'object') {
        const typ = typeof friendsName[0];
        if (friendsName.length > 0 && typ == 'string') {
            for (let i = 0; i < friendsName.length; i++) {
                var nameLength = friendsName[i].length;
                if (nameLength % 2 != 0) {
                    return friendsName[i];
                }
            }
        }
        else {
            return 'Declare Valid Array';
        }
    }
    else {
        return 'Enter Name Inside Array Only!';
    }
}
var names = ['Liam', 'Noah', 'Eva', 'Elija'];
console.log(oddFriend(names));