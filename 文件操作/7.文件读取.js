// 引入fs
const fs = require('fs');

// 异步读取
// 和之前一样，也是两个参数
fs.readFile('./src/观书有感.txt',(err,data)=>{ //err是错误信息，data是读取的数据
    // 如果报错，err是true
    if(err){
        console.log('读取有误')
        return;
    }
    // 如果没问题就输出读取的数据
    console.log(data); //<Buffer e4 d 0a e6 b8 ...more bytes>
    // 以字符串输出
    console.log(data.toString()) // 半亩方糖一件开    aaaa    bbbb
})

// 同步读取
let data = fs.readFileSync('./src/观书有感.txt')
console.log(data.toString())