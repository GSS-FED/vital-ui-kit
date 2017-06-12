'use strict';

var config       = require('../config');
var gulp         = require('gulp');
var gulpif       = require('gulp-if');
var gutil        = require('gulp-util');
var plumber      = require('gulp-plumber');
var sourcemaps   = require('gulp-sourcemaps');
var postcss      = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssnano      = require('cssnano');
var header       = require('gulp-header');
var handleErrors = require('../util/handleErrors');
var browserSync  = require('browser-sync');

var pkg          = require('../../package.json');

gulp.task('css', function () {

  var createSourceMap = global.isProd || config.css.sourcemap;

  return gulp.src(config.css.src)
    .pipe(plumber({errorHandler: function(error) {
      gutil.log(gutil.colors.grey(error.message));
      handleErrors(error, 'CSS');
      this.emit('end');
    }}))
    .pipe(gulpif(createSourceMap, sourcemaps.init()))
    .pipe(postcss([ 
      autoprefixer(config.css.autoprefixer)
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
    .pipe(gulp.dest(config.css.dest))
    .pipe(gulpif(
      global.isWatching, 
      browserSync.stream({
        match: '**/*.css'
      })
    ));

});
