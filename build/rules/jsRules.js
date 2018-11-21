const tsImportPluginFactory = require('ts-import-plugin')

const {resolve} = require('./../utils')

module.exports = [
    {
        test: /\.ts(x?)$/,
        use: [
            {
                loader: 'awesome-typescript-loader',
                options: {
                    transpileOnly: true,
                    useCache: true,
                    cacheDirectory: resolve('.cache-loader'),
                    getCustomTransformers: () => ({
                        before: [
                            tsImportPluginFactory({
                                libraryName: 'antd',
                                libraryDirectory: 'lib',
                                // 填写true的话使用组件的less文件
                                // 填写css的话使用css文件 但同时不能定制主题
                                style: true
                            })
                        ]
                    })
                }
            }
        ]
    }
]
