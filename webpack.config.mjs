import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

const currentDirname = dirname(fileURLToPath(import.meta.url));

export default {
    entry: './src/frontend/js/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(currentDirname, 'dist'),
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/frontend/index.html',
            filename: 'index.html',
        }),
        new MiniCssExtractPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader'
                ],
            },
        ],
    },
};
