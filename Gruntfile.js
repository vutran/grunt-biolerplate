module.exports = function(grunt) {

  // Setup configurations
  grunt.initConfig({
    // manifest file
    pkg : grunt.file.readJSON('package.json'),

    /**
     * Uglifies the /build/js/ folder and outputs the files to /assets/ directory
     *
     * @task uglify
     */
    uglify : {
      build : {
        expand : true,
        cwd : 'build/js/',
        src : ['*.js'],
        dest : 'assets/js/',
        ext : '.min.js'
      }
    },

    /**
     * Copies files from /build/ to the /assets/ directory
     *
     * @task copy
     */
    copy : {
      build : {
        expand : true,
        cwd : 'build/images/',
        src : '*',
        dest : 'assets/images/'
      }
    },

    /**
     * Compiles the /build/styl/ directory with Stylus to the /assets/css/ directory
     *
     * @task stylus
     */
    stylus : {
      options : {
        compress : true
      },
      build : {
        expand : true,
        cwd : 'build/styl/',
        src : '*.styl',
        dest : 'assets/css/',
        ext : '.min.css'
      }
    },

    /**
     * Watch for files and build
     *
     * @task watch
     */
    watch : {
      src : {
        files : ['build/js/*.js', 'build/styl/*.styl'],
        tasks : ['default']
      }
    }

  });

  // Load plugins
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-stylus');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Register the default task
  grunt.registerTask('default', ['uglify', 'copy', 'stylus']);

};