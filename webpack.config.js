
// var webpack = require('webpack');

// var config = {
//     entry: {
//         index:__dirname+'/src/page/index/index.js',
//         login:__dirname+'/src/page/login/index.js',
//         common:__dirname+'/src/page/common/index.js',
      
//     },
//     output: {
//         path:__dirname+'/dist',
//         filename:'js/[name].js'
//     },
//     externals: {
//         'jquery' : 'window.jquery'
//     },
//     plugins: [
//         new webpack.optimize.CommonsChunkPlugin({
//             name : 'common',
//             filename : 'js/base.js'
//         })
//     ]
    
// };

// module.exports = config;


var webpack             = require('webpack');
var path                = require("path");
var ExtractTextPlugin   = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin   = require('html-webpack-plugin');

// 环境变量配置，dev / online
var WEBPACK_ENV         = process.env.WEBPACK_ENV || 'dev';

// 获取html-webpack-plugin参数的方法 
var getHtmlConfig = function(name, title){
    return {
        template    : './src/view/' + name + '.html',
        filename    : 'view/' + name + '.html',
        // favicon     : './favicon.ico',
        title       : title,
        inject      : true,
        hash        : true,
        chunks      : ['common', name]
    };
};
// webpack config
var config = {
    entry: {
        'common'            : ['./src/page/common/index.js'],
        'index'             : ['./src/page/index/index.js'],
        'lovebook'             : ['./src/util/lovebook.js'],
        
    },
    output: {
        path        : __dirname + '/dist/',
        publicPath  : 'dev' === WEBPACK_ENV ? '/dist/' : '//s.lovebook.com/lovebook/dist/',
        filename    : 'js/[name].js'
    },
    externals : {
        'jquery' : 'window.jQuery'
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader' }) },
            { test: /\.(gif|png|jpg|woff|svg|eot|ttf)\??.*$/, loader: 'url-loader?limit=100&name=resource/[name].[ext]' },
            {
                test: /\.string$/, 
                loader: 'html-loader',
                query : {
                    minimize : true,
                    removeAttributeQuotes : false
                }
            }
        ]
    },
    resolve : {
        alias : {
            node_modules    : __dirname + '/node_modules',
            util            : __dirname + '/src/util',
            page            : __dirname + '/src/page',
            service         : __dirname + '/src/service',
            image           : __dirname + '/src/image'
        }
    },
    plugins: [
        // 独立通用模块到js/base.js
        new webpack.optimize.CommonsChunkPlugin({
            name : 'common',
            filename : 'js/base.js'
        }),
        // 把css单独打包到文件里
        new ExtractTextPlugin("css/[name].css"),
        // html模板的处理
        new HtmlWebpackPlugin(getHtmlConfig('index', '首页')),
        // new HtmlWebpackPlugin(getHtmlConfig('login', '登录')),
        // new HtmlWebpackPlugin(getHtmlConfig('detail', '商品详情')),
        // new HtmlWebpackPlugin(getHtmlConfig('cart', '购物车'))
    
    ],
    // devServer:{    // 配置服务器   webpack-dev-server
    //             contentBase:path.join(__dirname,"dist"),  // 服务器目录 
    //             compress:true,
    //             hot:true,
    //             host:"0.0.0.0",
    //             port:7000,
    //             publicPath:"/",
    //             historyApiFallback: true,    // html5 history api 
    //             disableHostCheck: true,
    //     },
};

if('dev' === WEBPACK_ENV){
    config.entry.common.push('webpack-dev-server/client?http://localhost:8088/');
}


module.exports = config;