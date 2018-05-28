
'use strict';
require('./index.css');
require('page/swiper/swiper-4.2.0.min.css');
require('page/common/header/index.js');
require('page/common/nav/index.js');
var Swiper=require('page/swiper/swiper-4.2.0.min.js');

// var navSide = require('page/common/nav-side/index.js');
// var _public      = require('util/public.js');
//初始化侧边导航
// navSide.init({
//     name:'user-center'
// })

var swiper = new Swiper('.swiper-container', {
    pagination: {el:'.swiper-pagination',},
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    paginationClickable: true,
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    autoplay: true,
    autoplayDisableOnInteraction: false
});




///测试线上数据的请求是是否能够成功
// _public.request({
//     url: 'happymmall.com/product/list.do?keyword=1',
//     success: function(res){
//         console.log(res);
//     },
//     success: function(errmsg){
//         console.log(errmsg);
//     }
// })

//获取url参数
// console.log(_public.getUrlParam('test'));


//html模板渲染
// var html = '<div>{{data}}</div>';
// var data = {
//     data :123
// }
// console.log(_public.renderHtml(html,data));


