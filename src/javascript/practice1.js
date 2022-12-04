
//console.log(Math.ceil(Math.random() * 6)) // between 1 and 6
//console.log(Math.ceil(Math.random() * 11) + 9)//10 - 20
//console.log(Math.floor(Math.random() * 11) + 10)//10 - 20

const isPerfectSquare = num => Math.sqrt(num) % 1 === 0


const convertToBase10 = (base, number) => {
    let total = 0;

    (number + '').split('').reverse().forEach(((num, index) => {
        total += (Number(num) * base) ** index
    }))
    return total;
}

// console.log(convertToBase10(2, 100100111))
// console.log(convertToBase10(10, 100100111))

const findTarget = (arr, target) => {
    if (arr[0] === target) return 0;
    if (arr.length > 1) {
        arr.shift();
        let returnTotal = findTarget(arr, target);
        return returnTotal < 0 ? -1 : returnTotal + 1;
    }
    return -1;

}
// console.log(findTarget([2,4,9,11,13,7,7,7,8], 13));

function allAlone(house) {

    const numRows = house.length;
    const numCols = house[0].length;
    let indexArr = [];
    for (let i = 0; i < numRows; i++) {
        for (let j = 0; j < numCols; j++) {
            if (house[i][j] === 'X')
                indexArr.push([i, j]);
        }
    }
    return indexArr;
}

// console.log(allAlone([
//     "  o                o        #######".split(''),
//     "###############             #     #".split(''),
//     "#             #        o    #     #".split(''),
//     "#  X          ###############     #".split(''),
//     "#                                 #".split(''),
//     "###################################".split('')
// ]))

function findTheNumberPlate(customerID) {
    let num = '' + ((customerID % 999) + 1);
    let letter = '';
    let originalString = 'aaa000'

    if (customerID < (26 * 999))
        letter = String.fromCharCode(Math.floor(customerID / 999) + 97);
    else if (customerID < (26 * 26 * 999)) {
        let part2 = (Math.floor(customerID / (999 * 26)))
        let part1 = Math.floor(customerID / 999) % 26
        letter = String.fromCharCode(part1 + 97) + '' + String.fromCharCode(part2 + 97);
    } else {
        let part3 = (Math.floor(customerID / (999 * 26 * 26)))
        let part2 = Math.floor(customerID / (999 * 26)) % 26
        let part1 = Math.floor(customerID / (999)) % 26
        letter = String.fromCharCode(part1 + 97) + '' + String.fromCharCode(part2 + 97) + '' + String.fromCharCode(part3 + 97);
    }
    originalString = letter + originalString.slice(letter.length, originalString.length - num.length) + num;

    return originalString

}

// console.log(findTheNumberPlate(3) === 'aaa004')
// console.log(findTheNumberPlate(1487) === 'baa489')
// console.log(findTheNumberPlate(40000) === 'oba041')
// console.log(findTheNumberPlate(17558423) === 'zzz999')
// console.log(findTheNumberPlate(234567) === 'aja802')
// console.log(findTheNumberPlate(43056) === 'rba100')


