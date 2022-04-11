const path = require('path');
const fs = require('fs');
const sha3_256 = require('js-sha3').sha3_256;


var array = []; 


var files = fs.readdirSync('../task2/data');

for(let i=0; i<files.length;i++){
    const buffer = fs.readFileSync('../task2/data/' + files[i]);
    const hash = sha3_256(buffer);
    array.push(hash);
}
array = array.sort();
array = array.join('');
array = array.concat('jedrzej.nowaczyk00@gmail.com');
var result = sha3_256(array);

console.log(result);