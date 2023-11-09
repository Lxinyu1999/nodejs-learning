// 导入fs
const fs = require('fs');
// 导入path
const path = require('path');

// 之前用的__dirname 会产生反斜杠和正斜杠的冲突, __dirname输出的是反斜杠\，而平常我们用的是斜杠/
console.log(__dirname+'/index.html') // D:\StudyFront\node\文件操作/index.html

// 为了统一规范，使用path.resolve方法来解决
// 它的输入要求：第一个是绝对路径，第二个是相对路径。
console.log(path.resolve(__dirname,'index.html')) // D:\StudyFront\node\文件操作\index.html
// 你也可以输入相对路径，它会自动计算并合并
console.log(path.resolve(__dirname,'./index.html')) // D:\StudyFront\node\文件操作\index.html
// 注意：这样是不对的
console.log(path.resolve(__dirname,'/index.html')) // 因为第二个/index.html不是相对路径，是绝对路径 

