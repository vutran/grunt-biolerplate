module.exports = function(grunt) {

  // Setup configurations
  grunt.initConfig({
    // manifest file
    pkg : grunt.file.readJSON('package.json'),

    /**
     * Clean folders
     *
     * @task clean
     */
    clean : {
      build : {
        src : ['assets/css/', 'assets/images/', 'assets/js/']
      }
    },

    /**
     * Copies files from /src/ to the /assets/ directory
     *
     * @task copy
     */
    copy : {
      build : {
        expand : true,
        cwd : 'src/images/',
        src : '*',
        dest : 'assets/images/'
      }
    },

    /**
     * Compiles the /src/styl/ directory with Stylus to the /assets/css/ directory
     *
     * @task stylus
     */
    stylus : {
      options : {
        compress : true
      },
      build : {
        expand : true,
        cwd : 'src/styl/',
        src : '*.styl',
        dest : 'assets/css/',
        ext : '.min.css'
      }
    },

    /**
     * Uglifies the /src/js/ folder and outputs the files to /assets/ directory
     *
     * @task uglify
     */
    uglify : {
      build : {
        expand : true,
        cwd : 'src/js/',
        src : ['*.js'],
        dest : 'assets/js/',
        ext : '.min.js'
      }
    },

    /**
     * Watch for files and build
     *
     * @task watch
     */
    watch : {
      src : {
        files : ['src/js/*.js', 'src/styl/*.styl'],
        tasks : ['default']
      }
    }

  });

  // Load plugins
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-stylus');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Register the default task
  grunt.registerTask('default', ['clean', 'copy', 'uglify', 'stylus']);

};