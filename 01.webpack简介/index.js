/*
 * @Author: your name
 * @Date: 2021-08-28 18:00:17
 * @LastEditTime: 2021-08-28 18:35:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /webpack/01.webpack简介/index.js
 */

// 主入口文件

// 引入js资源
import $ from 'jquery';
// 引入样式资源
import './index.less'
// 引入图片、字体等其他资源

$('#title').click(()=>{
    $('body').css('backgroundColor','deeppink')
})

