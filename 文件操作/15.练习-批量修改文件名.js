/** 将test文件夹下的1-9个js名字前面加一个0 */
const fs = require('fs')

// 读取code文件夹，注意是文件夹所以是dir不是file
const files = fs.readdirSync('./test');
console.log(files) // ['1.相对路径.js','2.创建buffer.js',...]

// 遍历该数组
files.forEach(item=>{
    // 拆分文件名
    let data = item.split('.') // 把第一位数字提取出来
    let [num, name] = data;
    // 判断
    if(Number(num)<10){
        num = '0'+num;
    }
    // 创建新的文件名
    let newName = num+'.'+name;
    //重命名
    // ``叫做字符串模板，${item}和${newName}是占位符，它们将被变量item和newName替换。
    fs.renameSync(`./test/${item}`,`./test/${newName}`);
})