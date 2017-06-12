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
  var htmlEntry = type==='kitHtml'? config.kitHtml : config.styleguideHtml;
  var htmlDest = global.isProd? htmlEntry.destProd : htmlEntry.dest;

  return gulp.src(htmlEntry.src)
    .pipe(plumber({errorHandler: function(error) {
      handleErrors(error, 'HTML');
      this.emit('end');
    }}))
    .pipe(htmlmin(htmlEntry.htmlmin))
    .pipe(gulp.dest(htmlEntry.dest))
    .pipe(gulpif(
      global.isWatching, 
      browserSync.reload({ stream:true })
    ));

}

gulp.task('styleguideHtml', ['fabricator-assemble'], function() { return taskHtml('styleguideHtml') });
