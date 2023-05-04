const fs = require('fs')
let input = fs.readFileSync('req.txt','utf-8')
const arr = input.split('\n').map(item => item.match(/\d+/g).map(Number))

let box = [
    ['G', 'T', 'R','W'],
    ['G', 'C', 'H', 'P', 'M', 'S', 'V', 'W'],
    ['C', 'L', 'T', 'S', 'G', 'M'],
    ['J', 'H', 'D', 'M', 'W', 'R', 'F'],
    ['P', 'Q', 'L', 'H', 'S', 'W', 'F', 'G'],
    ['P', 'J', 'D', 'N', 'F', 'M', 'S'],
    ['Z', 'B', 'D', 'F', 'G', 'C', 'S', 'J'],
    ['R', 'T', 'B'],
    ['H', 'N', 'W', 'L', 'C'],
]

for (let i = 0; i < arr.length; i++) {
    let letterCount = arr[i][0]
    let sourceArrayIndex = arr[i][1] - 1;
    let destinationArrayIndex = arr[i][2] - 1;
      
    let letter = box[sourceArrayIndex].splice(box[sourceArrayIndex].length - letterCount, letterCount).reverse();
    box[destinationArrayIndex].push(...letter);
}

console.log(box.map(item => item[item.length - 1]))
// JCMHLVGMG