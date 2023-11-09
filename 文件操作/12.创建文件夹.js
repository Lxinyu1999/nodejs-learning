const fs = require('fs')

// 创建文件夹
// 如果已经存在，则创建失败。
fs.mkdir('test',err=>{
    if(err){
        console.log('创建失败')
        return
    }
    console.log('创建成功')
})

// 递归创建
fs.mkdir('./a/b/c', {recursive:true},err=>{
    if(err){
        console.log('创建失败')
        return
    }
    console.log('创建成功')
})