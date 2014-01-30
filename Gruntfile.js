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
     * The path to bower
     *
     * @var string
     */
    bowerPath : 'bower_components/',

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
        src : ['<%= assetsPath %>/components/', '<%= assetsPath %>/css/', '<%= assetsPath %>/images/', '<%= assetsPath %>/js/']
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
        style : 'compressed',
        compass : true
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
     * Runs the JS through JSHint
     *
     * @task jshint
     */
    jshint : {
      options : {
        force : true
      },
      build : {
        expand : true,
        cwd : '<%= srcPath %>/js/',
        src : ['**/*.js'],
        dest : '<%= assetsPath %>/js/',
        ext : '.js'
      }
    },

    /**
     * Copies JS files from source path to the assets path
     *
     * @task copy
     */
    copy : {
      build : {
        expand : true,
        cwd : '<%= srcPath %>/js/',
        src : ['**/*.js'],
        dest : '<%= assetsPath %>/js/',
        ext : '.min.js'
      },
      bower : {
        expand : true,
        cwd : '<%= bowerPath %>/',
        src : ['**/*.js'],
        dest : '<%= assetsPath %>/components/',
        ext : '.min.js'
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
        src : ['**/*.js'],
        dest : '<%= assetsPath %>/js/',
        ext : '.min.js'
      },
      bower : {
        expand : true,
        cwd : '<%= bowerPath %>/',
        src : ['**/*.js'],
        dest : '<%= assetsPath %>/components/',
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
        files : ['<%= srcPath %>/js/**/*.js', '<%= srcPath %>/stylesheets/**/*.{styl,sass,scss}'],
        tasks : ['build']
      }
    }

  });

  // Load plugins
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-jshint');
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
  grunt.registerTask('default', ['clean', 'imagemin', 'copy', cssPreprocessor]);
  grunt.registerTask('build', ['clean', 'imagemin', 'uglify', cssPreprocessor]);

};