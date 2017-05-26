# 配置webpack

- 使用 npm install webpack webpack-dev-server --save-dev 安装webpack和webpack-dev-server
- React使用的JSX语法，需要使用babel去解析，安装对应的loader，使用 npm install babel-core babel-loader babel-preset-es2015 babel-preset-react babel-preset-stage-2 --save-dev 安装babel
- 配置webpack 配置文件

```
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
```
# 引入react 和react-dom 
- 安装 react、react-dom 使用命令: npm install --save react react-dom

# 新建入口文件
- 在src目录下新建index.js文件,在文件中键入以下内容:
```
import React from 'react';
import ReactDOM from 'react-dom';

//创建一个组件

const App =()=>{
    return(
        <h1> hello world !</h1>
    )
};

ReactDOM.render(<App/>, document.getElementById('root')); //渲染到DOM节点上
```
- 在根目录新建index.html 文件，在文件中键入以下内容:
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
    <div id="root"></div>
    <script src="bundle.js"></script>
</body>
</html>
```
# 配置package.json文件
```
{
  "name": "first",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "start": "webpack-dev-server --config webpack.config.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "react": "^15.5.4",
    "react-dom": "^15.5.4",
    "webpack": "^2.6.1"
  },
  "devDependencies": {
    "babel-core": "^6.24.1",
    "babel-loader": "^6.4.1",
    "babel-preset-es2015": "^6.24.1",
    "babel-preset-react": "^6.24.1",
    "babel-preset-stage-2": "^6.24.1",
    "html-webpack-plugin": "^2.28.0",
    "webpack-dev-server": "^2.4.5"
  }
}

```
# 运行
- 使用 npm install 安装依赖
- 使用 npm run start 运行
- 浏览器打开 http://localhost:8080 即可看到 页面显示 Hello world！
