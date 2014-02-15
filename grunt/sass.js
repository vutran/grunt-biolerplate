module.exports = {

    options : {
        style : 'nested',
        compass : true
    },

    default : {
        expand : true,
        cwd : '<%= buildCfg.srcPath %>/stylesheets/',
        src : '**/*.{sass,scss}',
        dest : '<%= buildCfg.assetsPath %>/css/',
        ext : '.css'
    },

    compressed : {
        options : {
            style : 'compressed'
        },
        expand : true,
        cwd : '<%= buildCfg.srcPath %>/stylesheets/',
        src : '**/*.{sass,scss}',
        dest : '<%= buildCfg.assetsPath %>/css/',
        ext : '.min.css'
    }

};