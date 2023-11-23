// 从外界导入自定义模块的时候，得到的成员就是通过module.exports 指向的对象
const tm = require('./src/testModule.js')

console.log(tm) // { username: 'lxy', sayHello: [Function (anonymous)] }
console.log(tm.username) // lxy
tm.sayHello() // 共享出去的方法！

const tm2 = require('./src/testModule2.js')
console.log(tm2) // { username: 'lxy', sayHello2: [Function: sayHello2] }
console.log(tm2.username) // lxy
// tm2.sayHello() // TypeError: tm2.sayHello is not a function；因为它被覆盖了
tm2.sayHello2() // 已经覆盖旧有对象！