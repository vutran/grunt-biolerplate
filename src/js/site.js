var site = (function() {

  console.log('hello world!');

  // Export as AMD module
  if (typeof define === "function" && define.amd) {
    define('site', [], function() { });
  }

}());