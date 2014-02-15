module.exports = {

    options : {
        force : true
    },
    default : {
        expand : true,
        cwd : '<%= buildCfg.srcPath %>/js/',
        src : ['**/*.js'],
        dest : '<%= buildCfg.assetsPath %>/js/',
        ext : '.js'
    }

};