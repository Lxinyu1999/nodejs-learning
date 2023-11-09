const fs = require('fs');

// 调用rename方法
fs.rename('test.js','hello.js',err=>{
    if(err){
        console.log('操作失败！')
        return;
    }
    console.log('操作成功！');
})

// 文件的移动，还是基于rename
fs.rename('test.js','src/hello.js',err=>{
    if(err){
        console.log('操作失败！')
        return;
    }
    console.log('操作成功！');
})