let obj = { 'a': 4, 'B': 7, 'c': 3, 'D': 9 }

//console.log(Object.values(obj))

// for(let key in obj)
//     console.log(obj[key])

// Object.values(obj).forEach(el => console.log(el))



// Object.entries(obj).forEach(element => {
//     if (element[0] === element[0].toUpperCase())
//         console.log(element)
// })

// for (let [key, value] of Object.entries(obj)) {
//     if (key === key.toUpperCase())
//         console.log(`${key}: ${value}`)
// }

// for(const key in obj){
//     if(/[A-Z]/.test(key)){
//         console.log(`${key}: ${obj[key]}`)
//     }
// }


obj = { 'a': [1, 2, 3], 'p': [], 't': [4, 2, 8], 'g': [3, 8, 5] }

// for (let key in obj){
//     for (let i = 0; i < obj[key].length; i++){
//         console.log(obj[key][i])
//     }
// }
// console.log(Object.values(obj))
// Object.values(obj).flat().forEach(num => console.log(num))

let sum = 0;
for (const key in obj){
    for (let index = 0; index < obj[key].length; index++){
        sum += obj[key][index] % 2 === 1 ? obj[key][index] : 0;
    }
}

let arr = []
console.log(arr.reduce((sum, num) => sum + num, 0))
arr = ['cat', 'in', 'tpta']
console.log(arr.reduce((str, num)=> str + num, ''))