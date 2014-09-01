var gulp = require('gulp');
var sass = require('gulp-sass');
var handleErrors = require('../util/handle-errors');
var concat = require('gulp-concat')

gulp.task('sass', ['images'], function () {
  return gulp.src('src/sass/ionic.scss')
    .pipe(sass({
      onError: handleErrors
    }))
    .pipe(concat('ionic.css'))
    .pipe(gulp.dest('build'));
});
