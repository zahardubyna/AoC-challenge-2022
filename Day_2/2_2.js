const fs = require('fs');
let input = fs.readFileSync('req.txt','utf-8')

const arr = input.split('\r\n')

let score = 0
for(let i = 0;i < arr.length;i++){
    switch (arr[i].split(" ")[1]) {
        case "X":
            switch (arr[i].split(" ")[0]) {
                case "A":
                    score += 3
                    break;
                case "B":
                    score += 1
                    break;
                case "C":
                    score += 2
                    break;
            }  
            break;
        case "Y":
            switch (arr[i].split(" ")[0]) {
                case "A":
                    score += 4
                    break;
                case "B":
                    score += 5
                    break;
                case "C":
                    score += 6
                    break;
            }  
            break;
        case "Z":
            switch (arr[i].split(" ")[0]) {
                case "A":
                    score += 8
                    break;
                case "B":
                    score += 9
                    break;
                case "C":
                    score += 7
                    break;
            }  
            break;
    }  
}
console.log(score)