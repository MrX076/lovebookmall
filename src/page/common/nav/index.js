'use strict'
require('./index.css');
var _lovebook = require('util/lovebook.js');
var _user = require('service/user-service.js');
var nav ={
    init : function(){
        this.bindEvent();
        this.loadUserInfo();
        // this.loadCartCount();
        return this;
    },
    bindEvent : function() {
        //登录事件
        $('.login').click(function(){
            _lovebook.doLogin();
        });
        //注册事件
        $('.register').click(function(){
            window.location.href = './register.html';
        });
        //退出登录
        $('.logout').click(function(){
            _user.logout(function(res){
                window.location.reload();
            },function(errMsg){
                _lovebook.errorTips(errMsg)
            });
        });

    },
    // 加载用户信息
    loadUserInfo : function(){
        _user.checkLogin(function(res){
            //隐藏未登录状态，显示登录状态
            $('.user.not-login').hide().siblings('.user.login').show()
                .find('.username').text(res.username);
        }, function(errMsg){
            
        });
    },
    // 加载购物车数量
    // loadCartCount : function(){
    //     _cart.getCartCount(function(res){
    //         $('.nav .cart-count').text(res || 0);
    //     }, function(errMsg){
    //         $('.nav .cart-count').text(0);
    //     });
    // }
}
module.exports = nav.init();