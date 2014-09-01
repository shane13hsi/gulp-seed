var browserSync = require('browser-sync')
var gulp = require('gulp')

gulp.task('browserSync', ['build'], function () {
  browserSync({
    server: {
      baseDir: ['build', 'src']
    },
    files: [
      "build/**",
      "!build/**.map"
    ]
  })
})
