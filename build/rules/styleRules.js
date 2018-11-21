const {resolve} = require('./../utils')
const theme = require('./../../theme')

module.exports = [
    {
        test: /\.css$/,
        use: [
            'style-loader',
            {
                loader: 'cache-loader',
                options: {
                    cacheDirectory: resolve('.cache-loader')
                }
            },
            {
                loader: 'typings-for-css-modules-loader',
                options: {
                    modules: true,
                    namedExport: true,
                    camelCase: true
                }
            },
        ]
    },
    {
        test: /\.less$/,
        // 只针对node_modules里面的less文件进行编译
        include: [resolve('node_modules')],
        use: [
            'style-loader',
            'css-loader',
            {
                loader: 'less-loader',
                options: {
                    // 禁用内联js代码 这个功能用于禁用在样式表里面写js代码
                    javascriptEnabled: true,
                    // 根据antd官网进行主题修改
                    modifyVars: theme
                }
            },
        ]
    },
    {
        test: /\.styl$/,
        // 只针对src里面的styl文件进行编译
        include: [resolve('src')],
        use: [
            'style-loader',
            {
                loader: 'typings-for-css-modules-loader',
                options: {
                    modules: true,
                    namedExport: true,
                    camelCase: true,
                    stylus: true
                }
            },
            {
                loader: 'stylus-loader',
                options: {
                    paths: [resolve('src/styles')]
                }
            }
        ]
    }
]
