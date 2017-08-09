'use strict';

var config      = require('../config');
var gulp        = require('gulp');
var plumber      = require('gulp-plumber');

gulp.task('docs', config.tasks.dev, function() {
  return gulp.src(config.root.buildStyleguide + '/**/*')
    .pipe(plumber({errorHandler: function(error) {
      handleErrors(error, 'Docs');
      this.emit('end');
    }}))
    .pipe(gulp.dest(config.root.docs));
});
