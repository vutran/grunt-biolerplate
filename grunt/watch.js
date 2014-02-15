module.exports = {

    src : {
        files : [
            '<%= buildCfg.srcPath %>/js/**/*.js',
            '<%= buildCfg.srcPath %>/stylesheets/**/*.{styl,sass,scss}'
        ],
        tasks : ['build']
    }

};