const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const { version } = require("./package.json");

module.exports = {
	mode: "development",
	entry: "./src/index.tsx",
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: `v${version}_bundle.js`,
	},
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: [
					{
						loader: "style-loader",
						options: {
							injectType: "singletonStyleTag",
						},
					},
					{
						loader: "css-loader",
						options: {
							modules: {
								auto: true,
								mode: "pure",
								localIdentName: "[name]__[local]--[hash:base64:8]",
							},
						},
					},
				],
				exclude: /node_modules/,
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: "asset/resource",
			},
			{
				test: /\.tsx?$/i,
				loader: "ts-loader",
				exclude: /node_modules/,
			},
		],
	},
	resolve: {
		extensions: [".ts", ".tsx", ".js", "jsx"],
		alias: {
			components: path.resolve(__dirname, "src/components"),
			styles: path.resolve(__dirname, "src/styles"),
			layouts: path.resolve(__dirname, "src/layouts"),
			pages: path.resolve(__dirname, "src/pages"),
			hooks: path.resolve(__dirname, "src/hooks"),
			context: path.resolve(__dirname, "src/context"),
			types: path.resolve(__dirname, "src/types"),
			images: path.resolve(__dirname, "src/images"),
			services: path.resolve(__dirname, "src/services"),
			mock: path.resolve(__dirname, "src/mock"),
		},
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: "Todo App",
			template: "src/public/index.html",
			inject: "body",
		}),
	],
	devtool: "inline-source-map",
	devServer: {
		historyApiFallback: true,
		port: "3030",
		hot: true,
	},
};
