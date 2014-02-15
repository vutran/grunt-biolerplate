module.exports = {

    default : {
        options : {
            compress : true
        },
        expand : true,
        cwd : '<%= buildCfg.srcPath %>/stylesheets/',
        src : '**/*.less',
        dest : '<%= buildCfg.assetsPath %>/css/',
        ext : '.min.css'
    }

};