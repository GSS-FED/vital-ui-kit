'use strict';

var config       = require('../config');
var gulp         = require('gulp');
var gulpif       = require('gulp-if');
var gutil        = require('gulp-util');
var plumber      = require('gulp-plumber');
var sass         = require('gulp-sass');
var postcss      = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssnano      = require('cssnano');
var sourcemaps   = require('gulp-sourcemaps');
var header       = require('gulp-header');
var handleErrors = require('../util/handleErrors');
var browserSync  = require('browser-sync');
var pkg          = require('../../package.json');
var concat       = require('gulp-concat');


function taskSass(type) {
  var sassEntry = type==='kitSass'? config.kitSass : config.styleguideSass;
  var sassDest = global.isProd? sassEntry.destProd : sassEntry.dest;

  if(global.isProd) {

    // copy vital-ui-kit.css
    if(type === 'styleguideSass') {
      gulp.src(config.kitSass.destProd + '/' + config.kitSass.output)
        .pipe(gulp.dest(sassDest));
    }

    // copy kit sass
    if(type === 'kitSass') {
      gulp.src(sassEntry.src[1])
        .pipe(gulp.dest(config.kitSass.sassProd))
    }

    // *.min.css
    gulp.src(sassEntry.src)
      .pipe(plumber({errorHandler: function(error) {
        handleErrors(error, 'Vendor Styles');
        this.emit('end');
      }}))
      .pipe(sourcemaps.init())
      .pipe(sass())
      .pipe(postcss([ cssnano() ]))
      .pipe(concat(sassEntry.outputMin))
      .pipe(sourcemaps.write('.'))
      .pipe(header(config.banner.header, {pkg: pkg})) // Header Banner
      .pipe(gulp.dest(sassDest));
  }

  // if prod, no sourcemap
  var createSourceMap = !global.isProd && sassEntry.sourcemap;
  // *.css
  return gulp.src(sassEntry.src)
    .pipe(plumber({errorHandler: function(error) {
      gutil.log(gutil.colors.grey(error.message));
      handleErrors(error, 'SASS');
      this.emit('end');
    }}))
    .pipe(gulpif(createSourceMap, sourcemaps.init()))
    .pipe(sass())
    .pipe(postcss([
      autoprefixer(sassEntry.autoprefixer)
    ]))
    .pipe(concat(sassEntry.output))
    .pipe(gulpif(
      createSourceMap,
      sourcemaps.write(createSourceMap ? '.' : null)
    ))
    .pipe(gulpif(global.isProd,
      header(config.banner.header, {pkg: pkg})
    )) // Header Banner
    .pipe(gulp.dest(sassDest))
    .pipe(gulpif(
      global.isWatching,
      browserSync.stream({
        match: '**/*.css'
      })
    ));
};

gulp.task('kitSass', function() { return taskSass('kitSass') });
gulp.task('styleguideSass', ['kitSass'], function() { return taskSass('styleguideSass') });

