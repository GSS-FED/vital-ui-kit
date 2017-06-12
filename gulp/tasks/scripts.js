'use strict';

var config       = require('../config');
var gulp         = require('gulp');
var gulpif       = require('gulp-if');
var plumber      = require('gulp-plumber');
var concat       = require('gulp-concat');
var uglify       = require('gulp-uglify');
var header       = require('gulp-header');
var browserSync  = require('browser-sync');

var handleErrors = require('../util/handleErrors');
var pkg          = require('../../package.json');

function taskScripts(type) {
  var scriptsEntry = type==='kitScripts'? config.kitScripts : config.styleguideScripts;
  var scriptsDest = global.isProd? scriptsEntry.destProd : scriptsEntry.dest;

  if(global.isProd) {

    // copy vital-ui-kit.js
    if(type === 'styleguideScripts') {
      gulp.src(config.kitScripts.destProd + '/' + config.kitScripts.output)
        .pipe(gulp.dest(scriptsDest));
    }

    // *.min.js
    if (type === 'styleguideScripts') {
      for (var key in scriptsEntry.outputMin) {
        gulp.src(scriptsEntry.outputMin[key])
          .pipe(plumber({errorHandler: function(error) {
            handleErrors(error, 'Min Script');
            this.emit('end');
          }}))
          .pipe(concat(key))
          .pipe(uglify())
          .pipe(header(config.banner.header, {pkg: pkg})) // Header Banner
          .pipe(gulp.dest(scriptsDest));
        }
      } else {
          gulp.src(scriptsEntry.src)
          .pipe(plumber({errorHandler: function(error) {
            handleErrors(error, 'Min Script');
            this.emit('end');
          }}))
          .pipe(concat(scriptsEntry.outputMin))
          .pipe(uglify())
          .pipe(header(config.banner.header, {pkg: pkg})) // Header Banner
          .pipe(gulp.dest(scriptsDest));
      }
    }

  // *.js
  if(type === 'styleguideScripts') {
    for(var key in scriptsEntry.output) {
      gulp.src(scriptsEntry.output[key])
        .pipe(plumber({errorHandler: function(error) {
          handleErrors(error, 'JS');
          this.emit('end');
        }}))
        .pipe(concat(key))
        .pipe(gulpif(global.isProd,
          header(config.banner.header, {pkg: pkg})
        ))
        .pipe(gulp.dest(scriptsDest))
        .pipe(gulpif(global.isWatching,
          browserSync.stream({ once: true })
        ));
    }
  } else {
    return gulp.src(scriptsEntry.src)
      .pipe(plumber({errorHandler: function(error) {
        handleErrors(error, 'JS');
        this.emit('end');
      }}))
      .pipe(concat(scriptsEntry.output))
      .pipe(gulpif(global.isProd,
        header(config.banner.header, {pkg: pkg})
      ))
      .pipe(gulp.dest(scriptsDest))
      .pipe(gulpif(global.isWatching,
        browserSync.stream({ once: true })
      ));
  }

}

gulp.task('kitScripts', function() { return taskScripts('kitScripts') });
gulp.task('styleguideScripts', ['kitScripts'], function() { return taskScripts('styleguideScripts') });

