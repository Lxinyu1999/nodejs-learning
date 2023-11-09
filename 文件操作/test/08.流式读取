// 1. 引入fs
const fs = require('fs');

// 2. 创建读取流对象
const rs = fs.createReadStream('src/img.jpg')

// 3. 绑定data事件，用于获取读到的数据
// 这个事件句柄是我们自定义的（不可以用addListener因为node不支持dom）
rs.on('data',chunk=>{ // chunk表示块儿的意思，也就是数据的一部分
    console.log(chunk);
})

// 最后输出结果如下：表示我们的流式读取分成了三次
{/* <Buffer ff d8 ... 65486 more bytes> 大约是64kb的数据，也就是流式读取一次读64kb
<Buffer a3 51  ... 65486 more bytes>
<Buffer 74 e3 e8 ... 48927 more bytes> */}

// 4. end 可选绑定事件
// 可选，主要是增加代码可读性
rs.on('end', ()=>{
    console.log('读取完成')
})