module.exports = {

    js : {
        options : {
            separator : ';'
        },
        src : ['<%= buildCfg.assetsPath %>/js/**/*.js'],
        dest : '<%= buildCfg.assetsPath %>/js/<%= buildCfg.main %>.min.js'
    }

};