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
     * Minifies image files form the /build/ to the /assets/ directory
     *
     * @task imagemin
     */
    imagemin : {
      dynamic : {
        files : [{
          expand : true,
          cwd : 'build/images/',
          src : ['**/*.{png,jpg,gif}'],
          dest : 'assets/images/'
        }]
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
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-stylus');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Register the default task
  grunt.registerTask('default', ['clean', 'imagemin', 'uglify', 'stylus']);

};