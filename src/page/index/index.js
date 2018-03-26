
'use strict';
require('./index.css');
require('page/common/header/index.js');
require('page/common/nav/index.js');
// require('page/common/nav-side/index.js');
var navSide = require('page/common/nav-side/index.js');
var _lovebook      = require('util/lovebook.js');

navSide.init({
    name:'user-center'
})
///测试线上数据的请求是是否能够成功
// _lovebook.request({
//     url: 'happymmall.com/product/list.do?keyword=1',
//     success: function(res){
//         console.log(res);
//     },
//     success: function(errmsg){
//         console.log(errmsg);
//     }
// })

//获取url参数
// console.log(_lovebook.getUrlParam('test'));


//html模板渲染
// var html = '<div>{{data}}</div>';
// var data = {
//     data :123
// }
// console.log(_lovebook.renderHtml(html,data));


