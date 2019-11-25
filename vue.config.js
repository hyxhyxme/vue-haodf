const path = require('path')

module.exports = {
    chainWebpack:config =>{
        config.resolve.alias
            .set('assets',path.resolve(__dirname,'./src/assets'))
            .set('components', path.resolve(__dirname, './src/components'))
    },

    devServer:{
        proxy : {
            '/api':{
                target : 'https://m.haodf.com',
                changeOrigin :true,
                pathRewrite :{
                    '^/api': ''
                }
            },
            '/foo':{
                target:'https://m.haodf.com',
                changeOrigin :true,
                pathRewrite : {
                    '^/foo' : ''
                },
                
            }

        }
    }
}