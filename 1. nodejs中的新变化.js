
/*BOM不可用，也就是常用的window、history、location、navigator都不行*/
// console.log(window) // ReferenceError: window is not defined

/*DOM也不可以，也就是document。*/
//console.log(document) // ReferenceError: document is not defined

/* 另外Ajax相关的也不行，真的逆天啊 */
// let xhr = new XMLHttpRequest(); // ReferenceError: XMLHttpRequest is not defined

/** 没有了window，那么我们的顶级对象是什么？顶级对象的名称叫做global */
// console.log(global); // 它相当于以前的window，输出如下：<ref *1> Object [global] {global: [Circular *1],queueMicrotask: [Function: qu ...
console.log(globalThis); // EMCA2020新引入的，就相当于global
console.log(global===global) // true

/* setTimeout 和 setInterval可以 正常使用 */
setTimeout(function(){ //它的作用是在一定的延迟时间之后执行指定的函数。
    console.log("暂停一秒之后发送消息哦耶")
},1000)

setInterval( ()=>{
    console.log("一秒钟弹一次哦耶")
},1000) // 按ctrl  c退出