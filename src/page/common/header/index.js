'use strict';
require('./index.css');
var _public     = require('util/public.js');

var header = {
     init : function() {
         this.onload();
         this.bindEvent();
     },
     onload : function() {
        var keyword = _public.getUrlParam('kerword');
        //keyword 存在，回填到输入框
        if(keyword){
            $('#search-input').val(keyword);
        }
     },
     bindEvent : function() {
         var _this = this;
         //点击按钮提交
         $('#search-btn').click(function(){
             _this.searchSubmit();
         });
         //回车键做提交
         $('#search-input').keyup(function(e){
             if(e.keyCode === 13){
                 _this.searchSubmit();
             }
         })
     },
     //搜索提交跳转
     searchSubmit : function() {
         var keyword = $.trim($('#search-input').val());
         //keyword 存在，跳转到list 页面
         if(keyword){
             window.location.href = './list.html?keyword='+keyword;
         }
         //keyword 不存在，返回主页
         else{
             _public.goHome();
         }
     }
}

header.init();