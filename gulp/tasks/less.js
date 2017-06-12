'use strict';

var config       = require('../config');
var gulp         = require('gulp');
var gulpif       = require('gulp-if');
var gutil        = require('gulp-util');
var plumber      = require('gulp-plumber');
var less         = require('gulp-less');
var postcss      = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssnano      = require('cssnano');
var sourcemaps   = require('gulp-sourcemaps');
var header       = require('gulp-header');
var handleErrors = require('../util/handleErrors');
var browserSync  = require('browser-sync');

var pkg          = require('../../package.json');

gulp.task('less', function () {

  var createSourceMap = global.isProd || config.less.sourcemap;

  return gulp.src(config.less.src)
    .pipe(plumber({errorHandler: function(error) {
      gutil.log(gutil.colors.grey(error.message));
      handleErrors(error, 'Less');
      this.emit('end');
    }}))
    .pipe(gulpif(createSourceMap, sourcemaps.init()))
    .pipe(less())
    .pipe(postcss([ 
      autoprefixer(config.less.autoprefixer)
    ]))
    .pipe(gulpif(
      global.isProd, 
      postcss([ cssnano() ]) 
    ))
    .pipe(gulpif(
      createSourceMap, 
      sourcemaps.write(createSourceMap ? '.' : null)
    ))
    .pipe(gulpif(global.isProd, 
      header(config.banner.header, {pkg: pkg}) 
    )) // Header Banner
    .pipe(gulp.dest(config.less.dest))
    .pipe(gulpif(
      global.isWatching, 
      browserSync.stream({
        match: '**/*.css'
      })
    ));

});
