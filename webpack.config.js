module.exports = {
    entry: ['./src/index.js'],
    output: {
        path: __dirname,
        publicPath: '/',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['react', 'es2015', 'stage-1']
                }
            }, {
                test: /\.scss$/,
                loaders: ["style", "css?sourceMap", "sass?sourceMap"]
            }
        ]
    },
    resolve: {
        extensions: [
            '', '.js', '.jsx'
        ],
        alias: {
            applicationStyles: '../style/app.scss'
        }
    },
    devServer: {
        historyApiFallback: true,
        contentBase: './'
    },
    devtool: 'inline-source-map'
};
