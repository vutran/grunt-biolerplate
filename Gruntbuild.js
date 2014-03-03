module.exports = {

    /**
     * (default: "app") Specify the name of your application. Your stylesheets and scripts will be compiled in the format of "{app}.min.js" and "{app.min.css}" in the respective assets directory."
     */
    main : "app",

    /**
     * (default: "src/") Specify the directory of your source files
     */
    srcPath : "src/",

    /**
     * (default: "src/") Specify the directory of your compiled assetss
     */
    assetsPath : "assets/",

    /**
     * (default: "bower_components/") Specify the directory of your bower components
     */
    bowerPath : "bower_components/",

    /**
     * (default: false) Set to true to enable compiling with RequireJS.
     */
    enableRequireJs : true

};