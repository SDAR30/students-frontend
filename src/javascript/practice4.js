// function possibilities(str) {

//   let result = [];
//   result = replaceQuestion(result, str)
//   let newResult = [];
//   while(result[0].includes('?')){
//     let curStr = result.shift();
//     result = replaceQuestion(result, curStr)
//   }



//   return result;
// };

// const replaceQuestion = (result, str)=>{
//   let stringsArr = result;
//   for (let i = 0; i < str.length; i++) {
//     if(str[i]==='?'){
//       stringsArr.push(str.substring(0,i) + '0'+str.substring(i+1))
//       stringsArr.push(str.substring(0,i) + '1'+str.substring(i+1))
//       break;
//     }
//   }
//   return stringsArr;

// }

// console.log(possibilities('?1?1?'))

function stringExpansion(s) {
  let result = '';
  let latestNum = 0;

  for (let i = 0; i < s.length; i++) {
    if (!isNaN(s[i])) {
      latestNum = Number(s[i])
      console.log(latestNum)
    }else{
      if(latestNum){
        result += (s[i]).repeat(latestNum)
      }

    }

  }
  return result;

}

// console.log(stringExpansion('3D2a5d2f'))

// function productFib(prod){
//   var n = 0;
//   var nPlus = 1;  
//   while(n*nPlus < prod) {
//     nPlus = n + nPlus;
//     n = nPlus - n;
//   }
//   return [n, nPlus, n*nPlus===prod];
// }

// function findByCount(arr, integer) {
//   let counter = {};

//   for(const food of arr){
//       food in counter ? counter[food]++ : counter[food] = 1;
//   }

//   let answer = [];

//   for(const [key, value] of Object.entries(counter)){
//       if(value===integer)
//           answer.push(key)
//   }

//   return answer;
// }


// function ROT135(input) {
//   //Provide your magic here please ;)
// }

// function shiftLowerChar(char){
//   let num = char.charCodeAt(0);
//   num = (num + 13 > 122) ? num - 13 : num + 13;
//   return String.fromCharCode(num);
// }

// function shiftDigit(digit){
// digit = (digit + 5 > 9) ? digit - 5 : digit + 5; 
// return digit;
// }

// function replicate(times, number, result=[]){
//   if (times<1) return result;
//   result.push(number)
//   return replicate(times-1, number, result)
// }

let replicate = (times, number) => times < 1 ? [] : [number, ...(replicate(times-1, number))]

const flattenArray = arr =>{
  let flattened = [];
  for(const element of arr){
    if(Array.isArray(element)){
      flattened.push(...flattenArray(element))
    }else{
      flattened.push(element)
    }
  }
  return flattened
}

// console.log(flattenArray([2,[[3,4],5],6]))
// console.log([4,[5,[7],8],9].flat(Infinity))

