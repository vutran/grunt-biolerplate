# Grunt Boilerplate

[![Build Status](https://travis-ci.org/vutran/grunt-boilerplate.png?branch=master)](https://travis-ci.org/vutran/grunt-boilerplate)

# Source Directories

All working stylesheets, scripts, and image assets should be added to the `src` directory.

Upon building with `grunt`, the `src` directory will be compiled into the `assets` folder.

	<PROJECT_ROOT>
    	assets/
        	css/
        	images/
        	js/
            vendor/
		bower_components/
        grunt/
        node_modules/
        src/
            images/
            js/
            stylesheets/
        Gruntbuild.js
		Gruntfile.js
		package.json

# Building Assets with Grunt.js

## Install Grunt.js

You need to install grunt.

`npm install -g grunt-cli`

# Install Dependencies

After grunt is installed, install local dependencies.

`npm install`

## Compile Manually

Switch to the working directory and run `grunt` via the command line.

### Basic Compilation

**Development build:**

`grunt default`

**Production build:**

`grunt build`

### RequireJS Compilation

**Development build:**

`grunt default:requirejs`

**Production build:**

`grunt build:requirejs`

## Watch for files

To make it easier, you can watch for changes by running `grunt watch`. This will rebuild the `assets` directory whenever a file is added, changed, or deleted.

### Basic Watch

**Development build:**

`grunt watch`

**Production build:**

`grunt watch:build`

# RequireJS Support

Please refer to the [RequireJS](http://requirejs.org) documentation for general usage and information.

## Compiling with Almond.js

To use RequireJs, you must have an [almond.js](https://github.com/jrburke/almond) file in your `src/js/` directory. Please refer to the documentation for extended configuration.

# Bower Support

Please refer to the [Bower](http://bower.io/) documentation for general usage and information.

Compiled assets will be copied into `assets/components/` in their respective vendor directories by default.

You can change the bower components directory in the `Gruntbuild.js` file if necessary.

# Changelog

## 0.3.1
* Added support for RequireJS with almond.js for AMD loading.

## 0.3
* Extracted task configurations into external files with `load-grunt-config`
* Added new CSS engine: LESS (`grunt-contrib-less`)
* Added `time-grunt`
* `grunt build` compress all files mapped from the `src` to `assets` directory and a combined version in a subdirectory.

## 0.2.2
* Added support for [Bower](http://bower.io)
* Added Compass support for `grunt-contrib-sass`
* Updated watch task
* New `grunt build` task

## 0.2.1
* Fixed watch task with correct paths
* Added MIT license

## 0.2.0
* Added new configurable CSS preprocessor: SASS
* Minor refactoring

## 0.1.2
* Replaced `grunt-contrib-copy` with `grunt-contrib-imagemin` for optimized images.
* Fixed package and repo name in `package.json`

## 0.1.1
* The `build` directory is now moved to `src`
* Added `grunt-contrib-clean` to clean out the assets directory before running tasks

## 0.1.0
* Initial version