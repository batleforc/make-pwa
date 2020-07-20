const webpack = require("webpack")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const CopyWebpackPlugin = require("copy-webpack-plugin")
const {CleanWebpackPlugin} = require("clean-webpack-plugin")
const webpackMerge = require('webpack-merge');
const path = require('path')

const loadPresets = require('./build-utils/loadPresets');

const modeConfig = env => require(`./build-utils/webpack.${env.mode}.js`)(env);


module.exports = ({mode,presets}) =>{
    return webpackMerge(
        {
        mode,
       module:{
        rules :[
            {
                test: /\.js$/,
                exclude: /node_modules/,
                include:[path.resolve(__dirname, 'src/Rapp')],
                use: {
                  loader: "babel-loader"
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader'],
                exclude: /node_modules/,
              },
        ],
       } ,
        plugins:[
            new CleanWebpackPlugin(),
            new webpack.ProgressPlugin(),
            new HtmlWebpackPlugin({
                filename:'index.html',
                template:'./src/index.html'
            }),
            new CopyWebpackPlugin({
                patterns:[
                    { from: 'src/media', to: 'media/' }, 
                    'src/manifest.json',
                    {from: 'src/Notif.js', to:'Notif.js'},
                    {from:'src/Rapp', to:'Rapp/'},
                    {from:'src/styles', to:'styles/'},
                ]
            }),
        ],
        devServer: {
            contentBase: './dist',
            port: 3000,
            historyApiFallback: true,
          },
          output: {
            publicPath: '/',
        }, 
          resolve: {
            extensions: ['.ts', '.tsx', '.js', '.jsx'],
          },
          performance:{
            maxAssetSize:150000000
          }
        },
        modeConfig({mode,presets}),
        loadPresets({mode,presets})
        )
};