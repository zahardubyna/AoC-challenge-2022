const fs = require("fs");
const arr = fs.readFileSync("req.txt", "utf8").split('\r\n').map(item => item.split(',').map(it => it.split('-').map(str => parseInt(str))));

let number = 0;

arr.forEach(item => {
    const abob = item[0][0]
    const aboba = item[0][1]
    const lixur = item[1][0]
    const licher = item[1][1]

    if (abob >= lixur && aboba <= licher || abob <= lixur && aboba >= licher) {
        number++;
    }
})

console.log(number)
