var gulp = require('gulp')

gulp.task('server', function() {
	var express = require('express')
	var app = express()

	console.log(__dirname + '/../../build')
	app.use(express.static(__dirname + '/../../build'))
	.listen(8080, function() {
		console.log('server listening to 8080')
	})
})
