/*
 * if the global.isWatching is set true, the uses watchify instead of
 * browsering for fast bundling using caching.
 *
 * */

var browserify = require('browserify')
var watchify = require('watchify')
var gulp = require('gulp')
var source = require('vinyl-source-stream')
var bundleLogger = require('../util/bundle-logger')
var handleErrors = require('../util/handle-errors')

gulp.task('browserify', function () {
  var bundler = browserify({
    // required watchify args
    cache: {}, packageCache: {}, fullPaths: true,
    entries: ['./src/javascript/app.coffee'],
    extensions: ['.coffee', '.hbs'],
    debug: true
  })

  var bundle = function () {
    bundleLogger.start();

    return bundler.bundle()
      .on('error', handleErrors)
      .pipe(source('app.js'))
      .pipe(gulp.dest('./build/'))
      .on('end', bundleLogger.end)
  }

  if (global.isWatching) {
    bundler = watchify(bundler)
    bundler.on('update', bundle)
  }

  return bundle();

});
