/*
 * @Author: your name
 * @Date: 2021-08-29 13:54:59
 * @LastEditTime: 2021-08-29 14:30:18
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /webpack/03.打包样式资源/webpack.config.js
 */

/*
    webpack.config.js webpack的配置方法
        作用：指示webpack 干哪些活（当你运行 webpack 指令时，会加载里面的配置）

        所有构建工具都是基于nodejs平台运行的～模块化默认采用commonjs
*/

// resolve用来拼接绝对路径的方法
const {resolve}  = require('path');

module.exports = {
    // webpack配置
    // 入口起点
    entry: './src/index.js',
    // 输出
    output: {
        // 输出文件名
        filename: 'built.js',
        // 输出路径
        // __dirname nodejs的变量，代表当前文件目录的绝对路径
        path: resolve(__dirname,'build')
    },
    // loader的配置
    module: {
        rules: [
            // 详细loader配置
            // 不同文件必须配置不同的loader处理
            {
                // 匹配哪些文件
                test: /\.css$/,
                // 使用哪些loader进行处理
                use: [
                    // use数组中loader的执行顺序：从右往左，从下到上 依次执行
                    // 创建style标签，将js中的样式资源插入进行，添加到head中生效
                    'style-loader',
                    // 将css文件夹变成commonjs模块加载到js中，里面的内容是样式字符串
                    'css-loader'
                ]
            },
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    // 将less文件编译成css文件
                    // 需要下载less-loader和less
                    'less-loader'
                ]
            }
        ]
    },
    // plugins的配置
    plugins: [
        // 详细plugins的配置
    ],
    // 模式
    mode: 'development', //开发模式
    // mode: 'production', //生产模式
}