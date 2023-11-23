console.log(exports)
console.log(module.exports)

console.log(module.exports === exports) // true，这两个是指向了同一个对象。
// 通过exports也可以共享数据
const exportsObj = require('./src/testExports.js')
console.log(exportsObj) // { username: 'lxy', age: 24 }


/** module.exports会覆盖exports等级更高 */
const meObj = require('./src/同时使用.js')
console.log(meObj) // { username: 'zhangsan' } exports的效果失效，因为require优先处理module.exports