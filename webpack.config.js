var webpack = require("webpack")
var ExtractTextPlugin = require("extract-text-webpack-plugin")
var OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin")
var path = require("path")

process.noDeprecation = true

module.exports = {
    entry: {'bundle2':"./mysrc/index.js",
            'elasticapp':'./app/index.ts',
            'reduxcolor':'./src/index.js'
    },
    output: {
        path: path.join(__dirname, "dist/assets"),
        filename: "[name].js",
        publicPath: "assets",
    },
    devServer: { 
        contentBase: path.resolve(__dirname, 'dist'), 
        port: 60800, 
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: "babel-loader",
                query: {
                    presets: ["env", "stage-0", "react"]
                }
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            },
            {
                test: /\.scss/,
                loader: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ["css-loader", {
                        loader: "postcss-loader",
                        options: {
                            plugins: () => [require("autoprefixer")]
                        }
                    }, "sass-loader"]
                })
            }, {
                test: /\.(png|woff|woff2|eot|ttf|svg)$/,
                loader: 'url-loader?limit=100000',
            },{
                enforce: 'pre',
                test: /\.ts$/,
                use: ['source-map-loader'],
              },{
                test: /\.ts$/,
                loader: 'ts-loader',
              }
            
        ]
    },
    plugins: [
        new ExtractTextPlugin("[name].css"),
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify("production")
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            warnings: false,
            mangle: false
        }),
        new OptimizeCssAssetsPlugin({
            assetNameRegExp: /\.optimize\.css$/g,
            cssProcessor: require('cssnano'),
            cssProcessorOptions: { discardComments: { removeAll: true } },
            canPrint: true
        }),
        new webpack.ProvidePlugin({
          $: 'jquery',
          jQuery: 'jquery'
        }),
    ]
}