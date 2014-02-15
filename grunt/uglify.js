module.exports = {
  

    bower : {
        expand : true,
        cwd : '<%= buildCfg.bowerPath %>/',
        src : ['**/*.js'],
        dest : '<%= buildCfg.assetsPath %>/components/',
        ext : '.min.js'
    },

    js : {
        expand : true,
        cwd : '<%= buildCfg.srcPath %>/js/',
        src : ['**/*.js'],
        dest : '<%= buildCfg.assetsPath %>/js/',
        ext : '.min.js'
    }

};