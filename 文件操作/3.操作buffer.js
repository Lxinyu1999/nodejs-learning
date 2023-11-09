/** buffer与字符串的转换 */
let buf = Buffer.from([105,108,111,118,101,121,111,117]);

// toString默认是按照utf-8编码的方式进行转换
console.log(buf.toString()); 

/** 获取buffer的某一个数组值 */
let buf2 = Buffer.from('hello');
console.log(buf2[0]); // 104，以十进制数字输出
console.log(buf2[0].toString()) // 104，toString()默认也是十进制
console.log(buf2[0].toString(2)) // toString(进制数)，这里是二进制1101000（默认的第一位0没输出）

// 另外，我们也可以修改它
buf2[0]='95'; // 将第一个字母修改为95号ASCII码对应的字母
console.log(buf2[0]) // 95，是'_'符号
console.log(buf2.toString()) //_ello


// 溢出：由于一个byte只有8位，因此只能表示最多两为16进制数。如果超过的话就不够用，会自动舍弃最高位
let overBuf = Buffer.from("hello");
buf[0] = 361 // 361=0001 0110 1001 → 0110 1001 = 69
console.log(buf); // 69

// 中文
let buf3 = Buffer.from("你好") // 一个中文字符占用三个字节，注意！！
let buf4 = Buffer.from("ab")
console.log(buf3) // <Buffer e4 bd a0 e5 a5 bd>
console.log(buf4) // <Buffer 61 62>