#webpack-初级

标题
==

标签（空格分隔）： 学习

---

<h2 style="color:pink">基础用法！！！</h2>
全局安装：
npm install -g webpack
可以安装在f盘下；


安装依赖项：
    > 1.创建配置项：
    >   cd进入目标文件；
    >   tab键补全；
    >   $ npm init   初始化；
    >   一路回车生成package.json文件
      
    > 2.安装webpack依赖项：
    >  $ npm install --save-dev webpack;
    >  --save-dev就是依赖项的意思；

模块引入:
    > require作为加载模块；
    > 格式：require("xxx.js")

执行打包:
    > webpack xxx.js yyy.js;
    > 前者是目标文件，后者是生成的文件


<h2 style="color:orange">config配置项用法！！！</h2>
创建webpack.congfig.js配置文件！；
<b> 这里的名字不能使用其他的！！！</b> 
--dirname指向当前项目的根目录！是nodejs里的
 
常用的出入口文件写法:

    entry: __dirname+'/main.js',
      output: {
          path: __dirname+'/build', // 输出文件的保存路径
          filename: 'comment.js' // 输出文件的名称
      },

在package.json基本配置文件里可以自定义关键字：

    "scripts": {
    	  "start":"webpack",
        "test": "echo \"Error: no test specified\" && exit 1"
      },
相当于输入start等同于webpack； 
<b>只有start是特殊的关键字直接可以用！！</b>
其他关键字需要加 run ...
例子：

    $ npm run xxx

<h2 style="color:orange">核心loaders！！！</h2>

test是一个正则表达式的检测（必须的）；
include是包含必须处理的文件；
exclude是提出不需要处理的文件；
     $ npm install -save-dev json-loader

 安装一个json的解析loader;
 同理安装css-loader ,style-loader

     $ npm install --save-dev style-loader css-loader
      
自动添加浏览器兼容的插件：

    npm install --save-dev postcss-loader autoprefixer
     
在 package.json基本配置文件添加依赖

       loder:"style-loader!css-loader!postcsss"
       .....
          postcss:[
            		require('autoprefixer')
            	], 
        	
 <h2 style="color:orange">核心Babel！！！</h2>       	
 
 es6语法转化为es5语法，
 安装常用的解析包：

     npm install --save-dev babel-core babel-loader babel-preset-es2015 babel-preset-react
     
安装react解析包：

    npm install --save react react-dom

config.js的配置项改动：

    {
    		test: /\.js$/,
    		loader: 'babel',
    		 exclude:/node_modules/,//去除掉工具包
    		 query:{
    			 preset:['es2015']
    		 }
    	  }
query是添加额外的依赖项；Babel可以认为不是正常的loader，而是一个扩展包！
若还有react等其他的js依赖，则跟在perset后面；

<h3 style="color:red">es6的函数写法！！</h3>
箭头函数：

      var sum=(a,b)=>a+b;
    
<h3 style="color:red">插件的使用！！</h3>  
plugins与loader不太一样，是对整个构建过程钟起到作用！需要再config文件里添加插件的额实例！！！
实例1：
版权备注插件：

这是一个webpack自带的插件，不需要install
但是需要<strong>引用</strong>和<strong>实例化</strong>，config修改如下:
1.首先头部引入webpack
> var webpack=require("webpack");

2.尾部添加实例化：
> 	plugins:[
> 		new webpack.BannerPlugin("肖大涵的小笔记")
> 	]

 npm install --save-dev webpack-dev-server安装热调试服务器
webpack-dev-server --inline开启本地服务，并且试试刷新！
