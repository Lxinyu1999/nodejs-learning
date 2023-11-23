/** Buffer是js中的自带模块（内置类），所以会自动加载进来 */

//1. alloc
let buf = Buffer.alloc(10); // 创建一个10字节byte（也就是80bit）的内存空间
console.log(buf) // <Buffer 00 00 00 00 00 00 00 00 00 00> 默认的2进制位都是0

//2. allocUnsafe：更快速的开辟内存空间
let buf2 = Buffer.allocUnsafe(10); // allocUnsafe创建的buffer可能包含之前旧的内存数据（因为内存空间可以复用），而alloc是会清0的
console.log(buf2) // <Buffer 00 00 00 00 00 00 00 00 00 00>

//3. from：它会将输入内容转化为二进制下的内存空间（16进制输出）
let buf3 = Buffer.from('hello');
console.log(buf3) // <Buffer 68 65 6c 6c 6f>，每个都是16进制数，对应ascII码

// 数组也是可以的，每个值先转为2进制再变16进制
let buf4 = Buffer.from([100,110,120,130,150]);
console.log(buf4) // <Buffer 64 6e 78 82 96>