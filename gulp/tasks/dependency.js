'use strict';

var config       = require('../config');
var gulp         = require('gulp');
var plumber      = require('gulp-plumber');
var concat       = require('gulp-concat');
var handleErrors = require('../util/handleErrors');
var browserSync  = require('browser-sync');
var reload       = browserSync.reload;

gulp.task('dependency', function () {
  // static
  gulp.src(config.dependency.static.src)
    .pipe(plumber({errorHandler: function(error) {
      handleErrors(error, 'Dependency Static');
      this.emit('end');
    }}))
    .pipe(gulp.dest(config.dependency.static.dest));

  // scripts
  gulp.src(config.dependency.scripts.src)
    .pipe(plumber({errorHandler: function(error) {
      handleErrors(error, 'Dependency Scripts');
      this.emit('end');
    }}))
    .pipe(gulp.dest(config.dependency.scripts.dest));

  // styles
  gulp.src(config.dependency.styles.src)
    .pipe(plumber({errorHandler: function(error) {
      handleErrors(error, 'Dependency Styles');
      this.emit('end');
    }}))
    .pipe(gulp.dest(config.dependency.styles.dest));

  // images
  gulp.src(config.dependency.images.src)
    .pipe(plumber({errorHandler: function(error) {
      handleErrors(error, 'Dependency Images');
      this.emit('end');
    }}))
    .pipe(gulp.dest(config.dependency.images.styleGuideDest));

  // fonts
  gulp.src(config.dependency.fonts.src)
    .pipe(plumber({errorHandler: function(error) {
      handleErrors(error, 'Dependency Fonts');
      this.emit('end');
    }}))
    .pipe(gulp.dest(config.dependency.fonts.dest));
    
  return gulp.src(config.dependency.fonts.styleguideSrc)
    .pipe(plumber({errorHandler: function(error) {
      handleErrors(error, 'Dependency Fonts');
      this.emit('end');
    }}))
    .pipe(gulp.dest(config.dependency.fonts.styleGuideDest));

});

