module.exports = {

    options : {
        compress : false
    },

    default : {
        expand : true,
        cwd : '<%= buildCfg.srcPath %>/stylesheets/',
        src : '**/*.less',
        dest : '<%= buildCfg.assetsPath %>/css/',
        ext : '.css'
    },

    compressed : {
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