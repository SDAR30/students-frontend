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

function productFib(prod){
  var n = 0;
  var nPlus = 1;  
  while(n*nPlus < prod) {
    nPlus = n + nPlus;
    n = nPlus - n;
  }
  return [n, nPlus, n*nPlus===prod];
}