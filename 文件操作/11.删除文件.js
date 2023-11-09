const fs = require('fs')

// 调用unlink方法
fs.unlink('src/test.js',err=>{
    if(err){
        console.log('删除失败')
        return;
    }
    console.log('删除成功')
})

// 调用rm方法 效果一样
fs.rm('src/hello.js',err=>{
    if(err){
        console.log('删除失败')
        return;
    }
    console.log('删除成功')
})