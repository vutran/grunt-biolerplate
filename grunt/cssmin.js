module.exports = {

    default : {

        src : ['<%= buildCfg.assetsPath %>/css/**/*.css'],
        dest : '<%= buildCfg.assetsPath %>/css/<%= buildCfg.main %>.min.css'

    }

};