const fs = require('fs')

// stat 方法，是status的缩写
fs.stat('src/img.jpg',(err,info)=>{
    if(err){
        console.log('操作失败')
    }
    console.log(info) // 输出信息
    console.log(info.isFile()) // 是否为文件 true
    console.log(info.isDirectory()) // 是否为文件夹 false
})
{
// Stats {
//     dev: 2728215752,
//     mode: 33206,
//     nlink: 1,
//     uid: 0,
//     gid: 0,
//     rdev: 0,
//     blksize: 4096,
//     ino: 844424931695291,
//     size: 180049,
//     blocks: 352,
//     atimeMs: 1698329554748.8677,
//     mtimeMs: 1698329554748.8677,
//     ctimeMs: 1698329554748.8677,
//     birthtimeMs: 1698329543415.134,
//     atime: 2023-10-26T14:12:34.749Z,
//     mtime: 2023-10-26T14:12:34.749Z,
//     ctime: 2023-10-26T14:12:34.749Z,
//     birthtime: 2023-10-26T14:12:23.415Z
//   }
}
