const fs = require('fs');
let input = fs.readFileSync('req.txt','utf-8')
let priorities = 0
let array = [];

function harr(item, count) {
    const result = [];
    for (let i = 0, j = count; i < item.length; i += count, j += count){
        result.push(item.slice(i, j))
    }
    return result;
}

const arr = input.split("\r\n").map((item) => {
    let i = item.split("");
    i = harr(i, i.length/2)
    return i
});

for(let i = 0;i < arr.length;i++){
    for(let j = 0;j < arr[i][0].length;j++){
         for(let x = 0;x < arr[i][0].length;x++){
            if (arr[i][0][j] === arr[i][1][x]){
                array.push(arr[i][0][j])
                array = array.filter((value, index) => value !== array[index - 1]);
            }
        }  
    }    
}

array.map((item)=>{
    if (item === item.toLowerCase()) {
        priorities += (item.charCodeAt(0) - 96);
    } else {
        priorities += (item.charCodeAt(0) - 38);
    }
})
console.log(priorities);