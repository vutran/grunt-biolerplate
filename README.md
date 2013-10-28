# Source Directories

All working Stylus, JavaScript, and Image assets should be added to the `src` directory.

Upon building with `grunt`, the `src` directory will be compiled into the `assets` folder.

# Building Assets with Grunt.js

## Install Grunt.js

`npm install -g grunt-cli`

# Install Dependencies

`npm install`

## Build Manually

Switch to the working directory and run `grunt` via the command line.

## Watch for files

To make it easier, you can watch for changes by running `grunt watch`. This will rebuild the `assets` directory whenever a file is added, changed, or deleted.

# Changelog

## 0.1.2
* Replaced `grunt-contrib-copy` with `grunt-contrib-imagemin` for optimized images.
* Fixed package and repo name in `package.json`

## 0.1.1
* The `build` directory is now moved to `src`
* Added `grunt-contrib-clean` to clean out the assets directory before running tasks

## 0.1.0
* Initial version