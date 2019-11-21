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
                target : 'https://m.haodf.com/nconsult/nethospital/getOrdinaryClinic?facultyId=7673059776&dateTime=2019-11-16&randomNumber=041142153945194204',
                changeOrigin :true,
                pathRewrite :{
                    '^/api': ''
                }
            },
            '/foo':{
                target:'https://m.haodf.com/nindex/ajaxGetDoctorList',
                changeOrigin :true,
                pathRewrite : {
                    '^/foo' : ''
                },
                
            }

        }
    }
}