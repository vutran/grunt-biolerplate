module.exports = {

    options : {
        mangle : true
    },

    js : {
        expand : true,
        cwd : '<%= buildCfg.srcPath %>/js/',
        src : ['**/*.js'],
        dest : '<%= buildCfg.assetsPath %>/js/',
        ext : '.min.js'
    }

};
