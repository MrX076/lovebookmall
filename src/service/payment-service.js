'use strict';
var _lovebook  = require('util/lovebook.js');

var _payment   = {
    // 获取支付信息
    getPaymentInfo : function(orderNumber, resolve, reject){
        _lovebook.request({
            url     : _lovebook.getServerUrl('/order/pay.do'),
            data    : {
                orderNo : orderNumber
            },
            success : resolve,
            error   : reject
        });
    },
    // 获取订单状态
    getPaymentStatus : function(orderNumber, resolve, reject){
        _lovebook.request({
            url     : _lovebook.getServerUrl('/order/query_order_pay_status.do'),
            data    : {
                orderNo : orderNumber
            },
            success : resolve,
            error   : reject
        });
    }
}
module.exports = _payment;