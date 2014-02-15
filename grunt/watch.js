module.exports = {

    default : {
        files : [
            '<%= buildCfg.srcPath %>/js/**/*.js',
            '<%= buildCfg.srcPath %>/stylesheets/**/*.{less,styl,sass,scss}'
        ],
        tasks : ['build']
    },

};