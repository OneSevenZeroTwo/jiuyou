module.exports = {
	entry: __dirname + '/app/main.js',
	output: {
		filename: 'bundle.js',
		path: __dirname + '/public/'
	},
	module: {
		loaders: [{
			//匹配对应的后缀文件类型
			//cnpm install style-loader css-loader
			test: /\.css$/,
			//用两个loader就用!隔开 style在css之前
			loader: "style-loader!css-loader"
		}, {
			test: /\.html$/,
			loader: "html-loader"
		}, {
			test: /\.(jpg|png|jpeg|gif)$/,
			loader: "url-loader"
		}, {
			//ES6^=>ES5
			test: /\.js$/,
			loader: "babel-loader"
		}, {
			//vue=>js
			test: /\.vue$/,
			loader: "vue-loader"
		}, {
			//vue=>js
			test: /\.scss$/,
			loader: "sass-loader"
		}, {
			//vue=>js
			test: /\.less$/,
			loader: "less-loader"
		}]
	},
	resolve: {
		alias: {
			'vue': 'vue/dist/vue.js'
		}
	}
//	devServer:{
//		contentBase:"./home/index.html",
//		inline:true,
//		port:12345
//	}
}