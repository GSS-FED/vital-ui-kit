'use strict';

var config       = require('../config');
var gulp         = require('gulp');
var gutil        = require('gulp-util');
var plumber      = require('gulp-plumber');
var gulpif       = require('gulp-if');
var gdata        = require('gulp-data'); 
var jade         = require('gulp-jade'); 
var filter       = require('gulp-filter');
var handleErrors = require('../util/handleErrors');
var browserSync  = require('browser-sync');

gulp.task('jade', function () {

  // Filtering out partials (folders and files starting with "_" )
  var f = filter(function(file) {
    return !/\/_/.test(file.path) && !/^_/.test(file.relative);
  }, { restore: true });

  return gulp.src(config.jade.src)
    .pipe(plumber({errorHandler: function(error) {
      gutil.log(gutil.colors.grey(error.message));
      handleErrors(error, 'Jade');
      this.emit('end');
    }}))
    .pipe(gulpif(
      config.jade.locals, 
      gdata(function(file) {
        var data = require('../../' + config.jade.locals);
        return data;
      })
    ))
    .pipe(jade({
      pretty: global.isProd ? '' : '  '
    }))
    .pipe(gulpif(!config.jade.underscore, f)) // Filtering
    .pipe(gulp.dest(config.jade.dest))
    .pipe(gulpif(!config.jade.underscore, f.restore))
    .pipe(gulpif(
      global.isWatching, 
      browserSync.reload({ stream: true })
    ));
});
