'use strict';
var _lovebook = require('util/lovebook.js');

var _user = {
    logout : function(resolve,reject){
        _lovebook.request({
            url     : _mm.getServerUrl('/user/logout.do'),
            method  : 'POST',
            success : resolve,
            error   : reject
        });
    }
}
module.exports = _user;