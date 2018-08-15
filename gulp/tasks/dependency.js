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

  return Promise.all([
    new Promise(function(resolve, reject) {
      // kendo images
      if(type == 'uikit') {
        gulp.src(config.dependency.kendoImages.src)
          .pipe(plumber({errorHandler: function(error) {
            handleErrors(error, 'Dependency kendoImages');
            this.emit('end');
            reject();
          }}))
          .pipe(gulp.dest(config.dependency.kendoImages[dependencyDest]))
          .on('end', resolve)
      } else {
        gulp.src(config.dependency.kendoImages.src)
          .pipe(plumber({errorHandler: function(error) {
            handleErrors(error, 'Dependency kendo images');
            this.emit('end');
            reject();
          }}))
          .pipe(gulp.dest(config.dependency.kendoImages[dependencyDest]))
          .on('end', resolve)
        }
    }),
    new Promise(function(resolve, reject) {
      // images ui kit
      if(type == 'uikit') {
        gulp.src(config.dependency.images.src)
          .pipe(plumber({errorHandler: function(error) {
            handleErrors(error, 'Dependency Images');
            this.emit('end');
            reject();
          }}))
          .pipe(gulp.dest(config.dependency.images[dependencyDest]))
          .on('end', resolve)
      } else {
      // images styleguide
        gulp.src(config.dependency.images.styleguideSrc)
          .pipe(plumber({errorHandler: function(error) {
            handleErrors(error, 'Dependency Images');
            this.emit('end');
            reject();
          }}))
          .pipe(gulp.dest(config.dependency.images[dependencyDest]))
          .on('end', resolve)
        }
    }),
    new Promise(function(resolve, reject) {
      // fonts ui kit
      if(type == 'uikit') {
        gulp.src(config.dependency.fonts.src)
          .pipe(plumber({errorHandler: function(error) {
            handleErrors(error, 'Dependency Fonts');
            this.emit('end');
            reject();
          }}))
          .pipe(gulp.dest(config.dependency.fonts[dependencyDest]))
          .on('end', resolve);
      } else {
      // fonts styleguide
        gulp.src(config.dependency.fonts.styleguideSrc)
          .pipe(plumber({errorHandler: function(error) {
            handleErrors(error, 'Dependency Fonts');
            this.emit('end');
            reject();
          }}))
          .pipe(gulp.dest(config.dependency.fonts[dependencyDest]))
          .on('end', resolve);
        }
    })
  ]);
}

gulp.task('dependency', function () {

  if(global.isProd) {
    return outputDependency('styleguide').then(function(success) {
      outputDependency('uikit').then(function(success) {
        // document
        return gulp.src(config.dependency.document.src)
          .pipe(plumber({errorHandler: function(error) {
            handleErrors(error, 'Dependency Document');
            this.emit('end');
          }}))
          .pipe(gulp.dest(config.dependency.document.destProd));
      });
    });
  } else {
    return outputDependency();
  }

});

