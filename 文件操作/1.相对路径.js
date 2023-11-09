const fs = require('fs')

/** 相对路径会有一些bug */
// 相对路径的参照物是命令行的工作目录，而不是当前js的所在目录！
// 这里我们先让命令行退到上一级文件夹，然后执行node 文件操作/1.相对路径.js
fs.writeFileSync('./index.html','冲') // 注意路径里不能有空格！

/* 绝对路径，很方便，但是每次都要手动输入太麻烦了！*/
// 通过引入__dirname 全局变量，它保存着当前文件所在文件夹的绝对路径
// 因此只需用 '__dirname + 文件名' 即可拼接为绝对路径了！
fs.writeFileSync(__dirname + 'index.html','冲击波！')
console.log(__dirname) // D:\StudyFront\node\文件操作