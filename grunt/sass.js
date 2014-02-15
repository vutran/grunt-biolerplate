module.exports = {

    options : {
        style : 'compressed',
        compass : true
    },
    default : {
        expand : true,
        cwd : '<%= buildCfg.srcPath %>/stylesheets/',
        src : '**/*.{sass,scss}',
        dest : '<%= buildCfg.assetsPath %>/css/',
        ext : '.min.css'
    }

};