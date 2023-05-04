const fs = require('fs');
const input = fs.readFileSync('req.txt','utf-8')
let priorities = 0
let array = [];
let array1 = []

let arr = input.split("\r\n").map(item => [...item]);

for (let i = 0; i < arr.length; i += 3) {
  array.push(arr.slice(i, i + 3));
}

function findCommonLetter(arr) {
  for (let i = 0; i < arr[0].length; i++) {
    const letter = arr[0][i];
    let isCommon = true;

    for (let j = 1; j < arr.length; j++) {
      if (arr[j].indexOf(letter) === -1) {
        isCommon = false;
        break;
      }
    }
    if (isCommon) {
      return letter;
    }
  }
}

for(let i = 0;i < array.length;i++){
  array1.push(findCommonLetter(array[i]))
}

array1.map((item)=>{
    if (item === item.toLowerCase()) {
        priorities += (item.charCodeAt(0) - 96);
    } else {
        priorities += (item.charCodeAt(0) - 38);
      }
})
console.log(priorities)
