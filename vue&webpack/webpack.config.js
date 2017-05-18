module.exports = {
	//入口文件
	entry: __dirname + "/main.js",
	//导出文件
	output:{
		path: __dirname + "/public",
		filename: "bundle.js"
	},
	resolve:{
		alias:{
			vue:'vue/dist/vue.js',
		}
	},
	module:{
		loaders:[{
			//npm install --save-dev babel-loader
			//npm install --save-dev babel-core babel-preset-es2015 //安装babel  实现 ES6 到 ES5
			//cnpm install babel-loader
			test: /\.js$/ ,
			loader: "babel-loader"
		},{
			//cnpm install html-loader
			test: /\.html$/ ,
			loader: "html-loader"
		}, {
			//cnpm install css-loader 
			//cnpm install style-loader
			test: /\.css$/,
			loader: "style-loader!css-loader"
		},{
			//cnpm install vue-loader 
			//cnpm install vue-template-compiler
			test: /\.vue$/ ,
			loader: "vue-loader"
		}, {
			//cnpm install url-loader 
			test: /\.(jpg|png|gif|jpeg)$/,
			loader: "url-loader"
		}, {
			//cnpm install file-loader
			test: /\.(ttf|svg|woff|eot)$/,
			loader: "file-loader"
		}]
	},
	//配置服务器
	//cnpm install -g webpack-dev-server
	devServer:{
		//服务器文件夹
		contentBase: "./public",
		//port为设置默认监听端口，如果省略，默认为"8080"
		//port:55555,
		//实时更新
		inline: true
	}
	//执行命令webpack-dev-server打开服务器
}
