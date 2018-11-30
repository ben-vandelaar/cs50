creditCardChecker = (card) => {
    let num = ("" + card).split('').map(Number);
    let oddNumber = [];
    let evenNumber = []
    for (let i = num.length; i >= 0; i--) {
        if (i & 1) {
            oddNumber.push(num[i])
        } else {
            evenNumber.push(num[i])
        }
    }
    console.log('odd', oddNumber)
    let newNumber = []

    let multiOddNumber = oddNumber.map(x => x * 2);

    for (let i = 0; i < multiOddNumber.length; i++) {
        if (multiOddNumber[i] > 9) {
            newNumber.push(("" + multiOddNumber[i]).split('').map(Number));
        } else {
            newNumber.push(multiOddNumber[i])
        }
    }
    console.log("New", newNumber)
    let mutltiNumber = newNumber.concat(evenNumber)
    console.log("multi", mutltiNumber)
    let numberSum = mutltiNumber.reduce(
        (x, y) => x + y, 0);
    console.log(numberSum)
    if (numberSum % 10) {
        console.log("INVALID YOU ARE A ROBOT")
    } else {
        console.log("HELLO MASTER")
    }
}
