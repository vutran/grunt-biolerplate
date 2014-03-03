module.exports = {

    options : {
        baseUrl : "<%= buildCfg.srcPath %>/js/",
        mainConfigFile : '<%= buildCfg.srcPath %>/js/config.js',
        name : "almond",
        include : ['main'],
        out : "<%= buildCfg.assetsPath %>/js/<%= buildCfg.main %>.min.js",
        optimize : 'uglify2',
        wrap : true
    },

    default : {
        options : {
            optimize : 'none'
        }
    },

    build : {
        options : {
            optimize : 'uglify2',
            wrap : true
        }
    }

};