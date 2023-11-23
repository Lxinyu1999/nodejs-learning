/** 加载模块 */
// 为什么输出了这么一句话？因为加载该模块的一瞬间就会执行一次该模块
const m1 = require('./src/testModule.js') // 加载了testModule这个自定义模块 
console.log(m1); // {} ，实际上m1是个空对象.因为模块作用域规定只有在该模块本身才能使用它的函数、变量等，require导入无效。

// 使用require的时候，路径可以不提供.js （因为node默认是js文件）
// const m2 = require('./src/testModule') // 加载了testModule这个自定义模块，注意上面和下面是同一模块，执行只能触发一次