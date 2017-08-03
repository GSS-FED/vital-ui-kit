'use strict';

var config       = require('../config');
var gulp         = require('gulp');
var plumber      = require('gulp-plumber');
var concat       = require('gulp-concat');
var handleErrors = require('../util/handleErrors');
var browserSync  = require('browser-sync');
var reload       = browserSync.reload;

function outputDependency(type) {
  var dependencyDest = 'dest';
  if(type) {
    dependencyDest = (type === 'styleguide'? 'styleguideDestProd' : 'destProd');
  }

  // scripts
  gulp.src(config.dependency.scripts.src)
    .pipe(plumber({errorHandler: function(error) {
      handleErrors(error, 'Dependency Scripts');
      this.emit('end');
    }}))
    .pipe(gulp.dest(config.dependency.scripts[dependencyDest]));

  // styles
  gulp.src(config.dependency.styles.src)
    .pipe(plumber({errorHandler: function(error) {
      handleErrors(error, 'Dependency Styles');
      this.emit('end');
    }}))
    .pipe(gulp.dest(config.dependency.styles[dependencyDest]));

  // images
  gulp.src(config.dependency.images.src)
    .pipe(plumber({errorHandler: function(error) {
      handleErrors(error, 'Dependency Images');
      this.emit('end');
    }}))
    .pipe(gulp.dest(config.dependency.images[dependencyDest]));

  // fonts ui kit
  if(type !== 'styleguide') {
    gulp.src(config.dependency.fonts.src)
      .pipe(plumber({errorHandler: function(error) {
        handleErrors(error, 'Dependency Fonts');
        this.emit('end');
      }}))
      .pipe(gulp.dest(config.dependency.fonts[dependencyDest]));
  }
    
  // fonts styleguide
  if(type !== 'uikit') {
    gulp.src(config.dependency.fonts.styleguideSrc)
      .pipe(plumber({errorHandler: function(error) {
        handleErrors(error, 'Dependency Fonts');
        this.emit('end');
      }}))
      .pipe(gulp.dest(config.dependency.fonts[dependencyDest]));
    }
}

gulp.task('dependency', function () {

  if(global.isProd) {
    outputDependency('styleguide');
    outputDependency('uikit');
    // document
    gulp.src(config.dependency.document.src)
      .pipe(plumber({errorHandler: function(error) {
        handleErrors(error, 'Dependency Document');
        this.emit('end');
      }}))
      .pipe(gulp.dest(config.dependency.document.destProd));
  } else {
    outputDependency();
  }

});

