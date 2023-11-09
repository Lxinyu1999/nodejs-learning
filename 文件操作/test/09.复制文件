/**
 * 需求：复制文件
 */
const fs = require('fs');

// 方式1：readFile
// let data = fs.readFileSync('test.js');
// fs.writeFileSync('src/test.js',data)// 写入文件
// console.log(process.memoryUsage()) // 查看内存大小 rss: 31780864,

// 方式2：流式操作
// 读取流对象，表示我们要一点一点读取
// const rs = fs.createReadStream('test.js');
// // 写入流对象，表示我们要一点一点往目标地点写
// const ws = fs.createWriteStream('src/test.js');
// // 绑定的data事件
// rs.on('data',chunk=>{
//     ws.write(chunk);
// })
// // 查看内存大小
// rs.on('end',()=>{
//     console.log(process.memoryUsage)
// })


// 3. 更简单的流式操作
const rs = fs.createReadStream('test.js')
const ws = fs.createWriteStream('./src/test.js')
rs.pipe(ws);