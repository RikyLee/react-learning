/**
 * Created by Riky on 2017/5/26.
 */

const path = require('path');

module.exports = {
    entry: './src/index.js',  //配置入口文件
    output: {
        path: path.resolve(__dirname, '/dist'), //打包之后的输出路径
        filename: 'bundle.js', //打包之后的输出文件名
        publicPath: "/", //打包之后html需要引入的静态文件的存放路径

    },
    module: {
        rules: [
            {
                test: /\.js|jsx$/,
                include: [
                    path.resolve(__dirname, 'src') //只解析src目录下面的后缀名为.js 或者.jsx 的文件
                ],
                loader: 'babel-loader', //使用babel-loader 解析
                options: {
                    presets: [["es2015", {"modules": false}], "stage-2", "react"] //解析为可以被es2015识别的语法
                },
            }
        ]
    },
    resolve: {
        modules: [
            "node_modules",
            path.join(__dirname, "src")
        ],
        extensions: [".js", ".json", ".jsx", ".css"],  //定义使用到的扩展名，引入的时候可以忽略
    }
};