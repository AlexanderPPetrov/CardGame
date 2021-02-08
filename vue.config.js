
module.exports = {
    css: {
        loaderOptions: {
            sass: {
                data: `
            
          `,
            }
        },
        sourceMap:true,
    },
    runtimeCompiler: true,
    chainWebpack: config => {
        config.module
            .rule('images')
            .use('url-loader')
            .loader('url-loader')
            .tap(options => Object.assign(options, {limit: 10240}))
    }
};
