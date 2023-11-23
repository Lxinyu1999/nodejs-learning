const customModule = require('./src/作用域')
console.log(customModule) // {} , 默认情况下，无法访问外界js文件

console.log(module)
/*
{
  id: '.',
  path: 'D:\\StudyFront\\node\\模块化',
  exports: {},
  filename: 'D:\\StudyFront\\node\\模块化\\2-模块作用域.js',
  loaded: false,
  children: [
    {
      id: 'D:\\StudyFront\\node\\模块化\\src\\作用域.js',
      path: 'D:\\StudyFront\\node\\模块化\\src',
      exports: {},
      filename: 'D:\\StudyFront\\node\\模块化\\src\\作用域.js',
      loaded: true,
      children: [],
      paths: [Array]
    }
  ],
  paths: [
    'D:\\StudyFront\\node\\模块化\\node_modules',
    'D:\\StudyFront\\node\\node_modules',
    'D:\\StudyFront\\node_modules',
    'D:\\node_modules'
  ]
}
 */
console.log(module.path) // D:\StudyFront\node\模块化 模块的路径
console.log(module.parent) // null，引用了该模块的模块
console.log(module.filename) // D:\StudyFront\node\模块化\2-模块作用域.js，模块的完整文件名
console.log(module.exports) // {}，导出给其他模块的元素集合对象

