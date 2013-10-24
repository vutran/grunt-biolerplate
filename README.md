# Build Directories

All working Stylus, JavaScript, and Image assets should be added to the `build` directory.

Upon building with `grunt`, the `build` directory will be compiled into the `assets` folder.

# Building Assets with Grunt.js

## Install Grunt.js

`npm install -g grunt-cli`

# Install Development Dependencies

`npm install --save-dev`

## Build Manually

Switch to the working directory and run `grunt` via the command line.

## Watch for files

To make it easier, you can watch for changes by running `grunt watch`. This will rebuild the `assets` directory whenever a file is added, changed, or deleted.