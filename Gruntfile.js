module.exports = function(grunt) {

    // Time it!
    require('time-grunt')(grunt);

    // Load the build cunfiguration
    var buildCfg = require('./Gruntbuild.js');

    // Load grunt tasks and configs
    require("load-grunt-config")(grunt);

    // Set the build configurations
    grunt.config.set("buildCfg", buildCfg);

};