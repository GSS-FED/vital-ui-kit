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

function styleguidScript(isMin) {
  var scriptEntry = config.styleguide.scripts;
  var scriptDest = global.isProd? scriptEntry.destProd : scriptEntry.dest;
  var scriptOutput = (isMin? scriptEntry.outputMin : scriptEntry.output);

  for(var key in scriptOutput) {
    gulp.src(scriptOutput[key])
      .pipe(plumber({errorHandler: function(error) {
        handleErrors(error, 'JS');
        this.emit('end');
      }}))
      .pipe(concat(key))
      .pipe(gulpif(isMin, uglify()))
      .pipe(gulpif(global.isProd, header(config.banner.header, {pkg: pkg})))
      .pipe(gulp.dest(scriptDest))
      .pipe(gulpif(global.isWatching,
        browserSync.stream({ once: true })
      ));
  }

}

function uikitScript(isMin) {
  var scriptEntry = config.uikit.scripts;
  var scriptDest = global.isProd? scriptEntry.destProd : scriptEntry.dest;
  var scriptOutput = (isMin? scriptEntry.outputMin : scriptEntry.output);

  return gulp.src(scriptEntry.src)
    .pipe(plumber({errorHandler: function(error) {
      handleErrors(error, 'JS');
      this.emit('end');
    }}))
    .pipe(concat(scriptOutput))
    .pipe(gulpif(isMin, uglify()))
    .pipe(gulpif(global.isProd, header(config.banner.header, {pkg: pkg})))
    .pipe(gulp.dest(scriptDest))
    .pipe(gulpif(global.isWatching,
      browserSync.stream({ once: true })
    ));
}

gulp.task('styleguidScript', function() {
  return styleguidScript();
});

gulp.task('uikitScript', function() {
  return uikitScript();
});

gulp.task('scripts', ['styleguidScript', 'uikitScript'], function() {
  if(global.isProd) {
    // compile min.css
    styleguidScript(true);
    uikitScript(true);
    // copy vital-ui-kit js to styleguide
    gulp.src(config.uikit.scripts.destProd + '/' + config.uikit.scripts.output)
      .pipe(gulp.dest(config.styleguide.scripts.destProd));
  }
});

