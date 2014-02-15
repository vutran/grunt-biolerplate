module.exports = {

    options : {
        compress : true
    },
    default : {
        expand : true,
        cwd : '<%= buildCfg.srcPath %>/stylesheets/',
        src : '**/*.styl',
        dest : '<%= buildCfg.assetsPath %>/css/',
        ext : '.min.css'
    }

};