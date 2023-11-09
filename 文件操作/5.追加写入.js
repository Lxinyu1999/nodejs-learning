// 1. 引入fs模块
const fs = require('fs');

// 2. 追加文字
// 在之前的座右铭.txt里面加一句话
// 它的参数和之前writeFile一样
fs.appendFile('./src/座右铭.txt','\r\n择其善者而从之，其不善者而改之',(err)=>{
    // 判定
    if(err){
        console.log('写入失败')
        return;
    }
    console.log('写入成功') // 三人行，必有我师焉择其善者而从之，其不善者而改之
})

// 3. 同步写入
// 换行：\r\n
fs.appendFileSync('./src/座右铭.txt','\r\n温故而知新')

// 4. 通过writeFile也可以追加写入
// flag:'a'表示进行追加，w=写入模式（覆盖上一次的，默认），r=读取模式
fs.writeFile('./src/座右铭.txt','\r\n通过write追加',{flag:'a'},(err)=>{
    if(err){
        console.log('写入失败');
        return;
    }
    console.log('写入成功');
})
