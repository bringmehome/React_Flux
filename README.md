# 如何搭建 React+Flux+Webpack 的环境

>1、下载zip文件 https://github.com/facebook/flux ，整个下载

>2、解压后得到 flux-master.zip\flux-master\examples\flux-todomvc里面的文件

>3、整个拷贝到一个文件夹下，执行 npm install，这下就可以直接运行index.html文件了

##至此，flux环境搭建成

>如果先通过 http://192.168.7.254:3000/ 地址来访问，或者自动watchify你的flux里修改的内容，请看下面

1. 参考此工程的package.json, server.js, webpack.config.js

2. 运行程序时候执行 npm start，此时生成的bundle在内存里

3. 如果需要把bundle.js生成实体文件，单独执行 **"watchify -o js/bundle.js -v -d flux/app.js"**
