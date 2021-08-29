/*
 * @Author: your name
 * @Date: 2021-08-29 19:29:37
 * @LastEditTime: 2021-08-29 20:02:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /webpack/08.开发环境配置/webpack.config.js
 */
/*
    开发环境配置：能让代码运行
        运行项目指令：
            webpack 会将打包结果输出出去
            npx webpack-dev-server 只会在内存内中编译打包，没有输出
*/
const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/js/index.js',
    output: {
        filename: 'js/built.js',
        path: resolve(__dirname,'build')
    },
    module: {
        rules: [
            // loader的配置
            {
                // 处理less资源
                test: /\.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            },
            {
                // 处理css资源
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                // 处理图片资源（在样式中引入的图片资源）
                test: /\.(jpg|png|gif)$/,
                loader: 'url-loader',
                options: {
                    limit: 8 * 1024,
                    name: '[hash:10].[ext]',
                    // 关闭es6模块化
                    esModule: false,
                    outputPath: 'imgs'
                }
            },
            {
                // 处理html中的img的资源
                test: /\.html$/,
                loader: 'html-loader',
            },
            {
                // 处理其他资源
                exclude: /\.(html|js|css|less|jpg|png|gif)$/,
                loader: 'file-loader',
                options: {
                    name: '[hash:10].[ext]',
                    outputPath: 'media'
                }
            }
        ]
    },
    plugins: [
        // plugins的配置
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ],
    mode: 'development',
    devServer: {
        contentBase: resolve(__dirname,'build'),
        compress: true,
        port: 3000,
        open: true
    }
}