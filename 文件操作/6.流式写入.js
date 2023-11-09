/**
 * 写一封观书有感.txt
 * 
 */
// 1. 导入fs
const fs = require('fs');

// 2. 创建写入流对象
// 相当于创建了一个和文件之间的通道
const ws = fs.createWriteStream('./src/观书有感.txt')

// 3. 再通过write写入
ws.write('半亩方糖一件开\r\n');
ws.write('aaaa\r\n')
ws.write('bbbb\r\n')

// 4. 关闭通道
ws.close();