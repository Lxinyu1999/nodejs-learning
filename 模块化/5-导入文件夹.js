// 导入文件夹需要用到package.json
const m = require('./src/导入文件夹') // 他会寻找该json中的main属性对应的js文件
console.log(m) // 我是一个暴露模块

// 如果没有package.json,就会寻找index.js
const m2 = require('./src') // 输出的是index.js暴露的东西
console.log(m2) // 没有package.json，就暴露index