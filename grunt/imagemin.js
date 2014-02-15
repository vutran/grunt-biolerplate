module.exports = {

    default : {
        files : [{
            expand : true,
            cwd : '<%= buildCfg.srcPath %>/images/',
            src : ['**/*.{png,jpg,gif}'],
            dest : '<%= buildCfg.assetsPath %>/images/'
        }]
    }

};