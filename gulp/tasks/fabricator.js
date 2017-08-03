'use strict';

var config       = require('../config');
var gulp         = require('gulp');
var gulpif       = require('gulp-if');
var gutil        = require('gulp-util');
var plumber      = require('gulp-plumber');

var assemble     = require('fabricator-assemble');
var objectAssign = require('object-assign');
var htmlmin        = require('gulp-htmlmin');

var handleErrors = require('../util/handleErrors');
var browserSync  = require('browser-sync');


gulp.task('fabricator-assemble', function () {

  var params = config.styleguide.fabricator.assemble;
  params.dest = global.isProd? params.destProd : params.dest;

  return assemble(
    objectAssign(params, {
      logErrors: !global.isProd,
      onError: function(error) {
        gutil.log(gutil.colors.grey(error.message));
        handleErrors(error, 'FABRICATOR ASSEMBLE');!!!
        this.emit('end');
      }
    })
  );
  
});

gulp.task('fabricator-compress-html', ['fabricator-assemble'], function() { 

  var htmlSrc = global.isProd? config.styleguide.views.srcProd : config.styleguide.views.src;
  var htmlDest = global.isProd? config.styleguide.views.destProd : config.styleguide.views.dest;

  return gulp.src(htmlSrc)
    .pipe(plumber({errorHandler: function(error) {
      handleErrors(error, 'HTML');
      this.emit('end');
    }}))
    .pipe(htmlmin(config.styleguide.views.htmlmin))
    .pipe(gulp.dest(htmlDest))
    .pipe(gulpif(
      global.isWatching, 
      browserSync.reload({ stream:true })
    ));

});

gulp.task('fabricator', ['fabricator-compress-html'], function() {
  if(global.isWatching) {
    browserSync.reload({ stream:true });
  }
});

