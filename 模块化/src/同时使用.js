module.exports.username = 'zhangsan'
// 此时exports指向的对象和module.exports就不一样了
exports = {
    username:'lisi',
    age:24
}

