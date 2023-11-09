const fs = require('fs');

// 输出文件列表
fs.readdir('src',(err,data)=>{
    if(err){
        console.log('读取失败')
        return;
    }
    console.log(data) // [ 'img.jpg', 'test.txt', '座右铭.txt', '观书有感.txt' ]
})