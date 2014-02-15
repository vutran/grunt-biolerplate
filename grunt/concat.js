module.exports = {

    js : {
        options : {
            separator : ';'
        },
        src : ['<%= buildCfg.assetsPath %>/js/**/*.js'],
        dest : '<%= buildCfg.assetsPath %>/js/combined/app.min.js'
    }

};