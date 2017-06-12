'use strict';

var config       = require('../config');
var gulp         = require('gulp');
var plumber      = require('gulp-plumber');
var eslint       = require('gulp-eslint');
var handleErrors = require('../util/handleErrors');

gulp.task('eslint', function() {
  return gulp.src(config.scripts.src)
    .pipe(plumber({errorHandler: function(error) {
      handleErrors(error, 'Eslint');
      this.emit('end');
    }}))
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failOnError());
});