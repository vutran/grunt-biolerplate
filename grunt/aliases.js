module.exports = {

    "default" : [
        // Clear images
        "clean",

        // Optimize images
        "imagemin",

        // CSS
        "sass",
        "stylus",
        "less",

        // Bower
        "copy:bower",

        // Copy JavaScript
        "copy:js"
    ],

    "build" : [
        // Clean assets
        "clean",

        // Optimize images
        "imagemin",

        // Compile all files
        "sass:compressed",
        "stylus:compressed",
        "less:compressed",
        // Minify and combine
        "cssmin",

        // Bower
        "uglify:bower",

        // Compile JavaScript
        "uglify:js",
        // Combine CSS files
        "concat:js"
    ]

};