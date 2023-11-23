/** 这是一个用户自定义模块 */
console.log("加载了testModule这个自定义模块")

// 默认情况下，module.exports = {}，我们可以往里面添加属性（操作和{}对象一样的）
module.exports.username = 'lxy' // 向module.exports对象上挂载一个username属性
module.exports.sayHello = function(){ // 向module.exports上挂载一个sayHello方法
    console.log('共享出去的方法！')
}