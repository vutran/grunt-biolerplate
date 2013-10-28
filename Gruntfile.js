module.exports = function(grunt) {

  // Setup configurations
  grunt.initConfig({
    // manifest file
    pkg : grunt.file.readJSON('package.json'),

    /**
     * The path of the assets to compile
     *
     * @var string
     */
    srcPath : 'src/',

    /**
     * The path of the compiled assets
     *
     * @var string
     */
    assetsPath : 'assets/',

    /**
     * Choose the CSS preprocessor (stylus, sass, scss)
     *
     * @var string
     */
    cssPreprocessor : 'stylus',

    /**
     * Clean folders
     *
     * @task clean
     */
    clean : {
      build : {
        src : ['<%= assetsPath %>/css/', '<%= assetsPath %>/images/', '<%= assetsPath %>/js/']
      }
    },

    /**
     * Minifies image files form the /src/ to the /assets/ directory
     *
     * @task imagemin
     */
    imagemin : {
      dynamic : {
        files : [{
          expand : true,
          cwd : '<%= srcPath %>/images/',
          src : ['**/*.{png,jpg,gif}'],
          dest : '<%= assetsPath %>/images/'
        }]
      }
    },

    /**
     * Compiles the /src/stylesheets/ directory with Stylus to the /assets/css/ directory
     *
     * @task stylus
     */
    stylus : {
      options : {
        compress : true
      },
      build : {
        expand : true,
        cwd : '<%= srcPath %>/stylesheets/',
        src : '**/*.styl',
        dest : '<%= assetsPath %>/css/',
        ext : '.min.css'
      }
    },

    /**
     * Compiles the /src/stylesheets/ directory with Sass to the /assets/css/ directory
     *
     * @task sass
     */
    sass : {
      options : {
        style : 'compressed'
      },
      build : {
        expand : true,
        cwd : '<%= srcPath %>/stylesheets/',
        src : '**/*.{sass,scss}',
        dest : '<%= assetsPath %>/css/',
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
        cwd : '<%= srcPath %>/js/',
        src : ['*.js'],
        dest : '<%= assetsPath %>/js/',
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
        files : ['<%= srcPath %>/js/*.js', '<%= srcPath %>/styl/*.styl'],
        tasks : ['default']
      }
    }

  });

  // Load plugins
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-stylus');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Set the CSS preprocessor
  cssPreprocessor = 'stylus';
  switch(grunt.config.get('cssPreprocessor')) {
    case 'sass':
    case 'scss':
      cssPreprocessor = 'sass';
      break;
    case 'stylus':
    default:
      cssPreprocessor = 'stylus';
      break;
  }

  // Register the default task
  grunt.registerTask('default', ['clean', 'imagemin', 'uglify', cssPreprocessor]);

};