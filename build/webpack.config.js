const path = require('path')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')
const plugins = require('./plugins')
const jsRules = require('./rules/jsRules')
const styleRules = require('./rules/styleRules')
const {resolve} = require('./utils')

module.exports = {
    entry: {
        app: resolve('src/index.tsx')
    },
    output: {
        path: resolve('dist'),
        filename: '[name].js'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
        plugins: [
            new TsconfigPathsPlugin({
                // 配置文件引入tsconfig.json
                configFile: resolve('tsconfig.json')
            })
        ]
    },
    module: {
        rules: [...jsRules, ...styleRules]
    },
    plugins: [...plugins]
}
