const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: "./src/index.js",
    target: 'electron-renderer',
    output: {
        path: path.resolve(__dirname, 'src'),
        filename: "bundle.js"
    },

    resolve: {
        extensions: ['.js', '.jsx']
    },

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        exclude: /node_modules/,
                        presets: ['@babel/preset-react'],
                    }
                }
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
        ],

    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ],
};
