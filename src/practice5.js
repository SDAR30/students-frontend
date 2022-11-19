function getPINs(observed) {
    let lock = {
        1: ['1', '2', '4'], 2: ['1', '2', '3', '5'], 3: ['2', '3', '6'], 4: ['1', '4', '5', '7'],
        5: ['2', '4', '5', '6', '8'], 6: ['3', '5', '6', '9'], 7: ['4', '7', '8'], 8: ['5', '7', '8', '9', '0'],
        9: ['6', '8', '9'], 0: ['8', '0']
    }
    let digits = observed.split('');

    let combos = [];

    for (let i = 0; i < digits.length; i++) {
        combos.push(lock[digits[i]])
    }
    return combos.reduce((a, b) => a.flatMap(x => b.map(y => x + y)), [''])
}

function getPIN2(observed) {
    let observedINT = observed.split('');
    let pins = [];
    let lock = {
        0: ["0", "8"],
        1: ["1", "2", "4"],
        2: ["1", "2", "3", "5"],
        3: ["2", "3", "6"],
        4: ["1", "4", "5", "7"],
        5: ["2", "4", "5", "6", "8"],
        6: ["3", "5", "6", "9"],
        7: ["4", "7", "8"],
        8: ["0", "5", "7", "8", "9"],
        9: ["6", "8", "9"]
    };

    for (let i in observedINT) {
        let possible = lock[observedINT[i]];
        pins.push(possible);
    }

    return pins.reduce(function (a, b) {
        let result = [];
        for (let x in a) {
            for (let y in b) {
                result.push(a[x] + b[y]);
            }
        }
        return result;
    });
}
//  console.log(getPIN2('101'))

let vals = [3,4,6]
let result = vals.reduce((acc,cur)=>{
    let result = [];
    result.push(acc + ''+ cur);
    result.push(cur + ''+ acc)
    return result;
},[])

 console.log(result)