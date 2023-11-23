module.exports.username = 'xyl'
module.exports.sayHello = ()=>{
    console.log("被覆盖了")
}
// 让module.exports指向一个全新的对象，它会覆盖旧有模块
module.exports = {
    username : 'lxy',
    sayHello2(){
        console.log("已经覆盖旧有对象！")
    }
}