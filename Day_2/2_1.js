const fs = require('fs');
let input = fs.readFileSync('req.txt','utf-8')

const arr = input.split('\r\n')

let score = 0
for(let i = 0;i < arr.length;i++){
    switch (arr[i]) {
        case "A X":
            score += 4
            break;
        case "B Y":
            score += 5
            break;
        case "C Z":
            score += 6
            break;
        case "A Y":
            score += 8
            break;
        case "A Z":
            score += 3
            break;
        case "B X":
            score += 1
            break;
        case "B Z":
            score += 9
            break;
        case "C Y":
            score += 2
            break; 
        case "C X":
            score += 7
            break;       
    }  
}
console.log(score)