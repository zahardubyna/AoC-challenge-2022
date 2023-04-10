const fs = require('fs');
let input = fs.readFileSync('req.txt','utf-8')

const arr = input.split('\r\n\r\n').map((item) => {
    let i = item.split('\r\n').map((item) => {
        return Number(item)        
    });
        
    return i
});

function CaloriesElf(){
    let max = 0
    let position = 0
    for(let i=0;i < arr.length;i++){
        let x = 0
        for(let j=0;j < arr[i].length;j++){
            x += arr[i][j]
        }
        arr[i] = x
        if (max < arr[i]){
            max = arr[i]
            position = i
        }
    }
    
    return arr
}
function CaloriesTreeElf(){
    const arr = CaloriesElf()
    arr.sort((a, b) => a - b).reverse()
    return arr[0] + arr[1] + arr[2]
}

let C = CaloriesTreeElf()
console.log(C)