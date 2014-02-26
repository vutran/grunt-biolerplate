module.exports = {

    "default" : [
        // Clear assets
        "clean",

        // Optimize images
        "imagemin",

        // Compile stylesheets
        "sass",
        "stylus",
        "less",

        // Install Bower dependencies
        "bower:install",

        // Copy Javascript files
        "copy:js"
    ],

    "build" : [
        // Clean assets
        "clean",

        // Optimize images
        "imagemin",

        // Compile stylesheets
        "sass:compressed",
        "stylus:compressed",
        "less:compressed",
        // Minify and concat stylesheets
        "cssmin",

        // Install Bower dependencies
        "bower:install",

        // Compile Javascript
        "uglify:js",
        // Concat Javascript files
        "concat:js"
    ]

};