/*
 * @Author: your name
 * @Date: 2021-08-28 18:54:25
 * @LastEditTime: 2021-08-29 11:25:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /webpack/02.webpack初体验/src/index.js
 */

/*
    index.js: webpack入口文件

    1.运行开发指令：
        开发环境：webpack ./src/index.js -o ./build/built.js --mode=development
            webpack会以 ./src/index.js 为入口文件开始打包，打包输出到./build/built.js
            整体打包环境，是开发环境
        生产环境：webpack ./src/index.js -o ./build/built.js --mode=production
            webpack会以 ./src/index.js 为入口文件开始打包，打包输出到./build/built.js
            整体打包环境，是生产环境
    2.结论
        1.webpack能处理js/json资源，不能处理css/img等其他资源
        2.生产环境和开发环境将ES6模块化编译成浏览器能识别的模块化
        3.生产环境比开发环境多一个压缩js代码
*/ 

// import './index.css'

import data from './data.json'
console.log(data);

function add(x,y) {
    return x + y;
}

console.log(add(1,2));

