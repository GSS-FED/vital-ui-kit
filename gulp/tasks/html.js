'use strict';

var config         = require('../config');
var gulp           = require('gulp');
var browserSync    = require('browser-sync');
var changed        = require('gulp-changed');
var gulpif         = require('gulp-if');
var plumber        = require('gulp-plumber');
var htmlmin        = require('gulp-htmlmin');
var handleErrors   = require('../util/handleErrors');

function taskHtml(type) {
  var htmlSrc = global.isProd? config.styleguideHtml.srcProd : config.styleguideHtml.src;
  var htmlDest = global.isProd? config.styleguideHtml.destProd : config.styleguideHtml.dest;

  return gulp.src(htmlSrc)
    .pipe(plumber({errorHandler: function(error) {
      handleErrors(error, 'HTML');
      this.emit('end');
    }}))
    .pipe(htmlmin(config.styleguideHtml.htmlmin))
    .pipe(gulp.dest(htmlDest))
    .pipe(gulpif(
      global.isWatching, 
      browserSync.reload({ stream:true })
    ));

}

gulp.task('styleguideHtml', ['fabricator-assemble'], function() { return taskHtml('styleguideHtml') });
