var anotherModule = (function() {

  console.log('foo bar baz!');

  // Export as AMD module
  if (typeof define === "function" && define.amd) {
    define('anotherModule', [], function() { });
  }

}());