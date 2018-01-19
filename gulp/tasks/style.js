'use strict';

var config       = require('../config');
var gulp         = require('gulp');
var gulpif       = require('gulp-if');
var gutil        = require('gulp-util');
var plumber      = require('gulp-plumber');
var path         = require('path');

var less         = require('gulp-less');
var sass         = require('gulp-sass');
var postcss      = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssnano      = require('cssnano');
var sourcemaps   = require('gulp-sourcemaps');

var header       = require('gulp-header');
var handleErrors = require('../util/handleErrors');
var browserSync  = require('browser-sync');
var concat       = require('gulp-concat');

var pkg          = require('../../package.json');


function styleguidStyle(isMin) {
  var styleEntry = config.styleguide.styles;
  var styleDest = (global.isProd? styleEntry.destProd : styleEntry.dest);
  var postcssPlugins = (isMin? [
    autoprefixer(styleEntry.autoprefixer),
    cssnano()
  ] : [autoprefixer(styleEntry.autoprefixer)]);
  var styleOutput = (isMin? styleEntry.outputMin : styleEntry.output);

  // compile sass to css
  return gulp.src(styleEntry.sass.src)
    .pipe(plumber({errorHandler: function(error) {
      gutil.log(gutil.colors.grey(error.message));
      handleErrors(error, 'SASS');
      this.emit('end');
    }}))
    .pipe(gulpif(styleEntry.sourcemap, sourcemaps.init()))
    .pipe(sass())
    .pipe(postcss(postcssPlugins))
    .pipe(concat(styleOutput))
    .pipe(gulpif(styleEntry.sourcemap, sourcemaps.write('.')))
    .pipe(gulpif(global.isProd, header(config.banner.header, {pkg: pkg})))
    .pipe(gulp.dest(styleDest))
    .pipe(gulpif(
      global.isWatching,
      browserSync.stream({
        match: '**/*.css'
      })
    ));
}

function uikitStyle(isMin) {
  var styleEntry = config.uikit.styles;
  var styleDest = global.isProd? config.uikit.styles.destProd : config.uikit.styles.dest;
  var postcssPlugins = isMin? [
    autoprefixer(styleEntry.autoprefixer),
    cssnano()
  ] : [autoprefixer(styleEntry.autoprefixer)];
  var styleOutput = (isMin? styleEntry.outputMin : styleEntry.output);
  var kendoOutput = (isMin? styleEntry.outputMinKendo : styleEntry.outputKendo);

  return Promise.all([
    new Promise(function(resolve, reject) {
      // compile sass to css
      gulp.src(styleEntry.sass.src)
        .pipe(plumber({errorHandler: function(error) {
          gutil.log(gutil.colors.grey(error.message));
          handleErrors(error, 'SASS');
          this.emit('end');
          reject();
        }}))
        .pipe(gulpif(styleEntry.sourcemap, sourcemaps.init()))
        .pipe(sass())
        .pipe(postcss(postcssPlugins))
        .pipe(concat(styleOutput))
        .pipe(gulpif(styleEntry.sourcemap, sourcemaps.write('.')))
        .pipe(gulpif(global.isProd, header(config.banner.header, {pkg: pkg})))
        .pipe(gulp.dest(styleDest))
        .on('end', resolve)
        .pipe(gulpif(
          global.isWatching,
          browserSync.stream({
            match: '**/*.css'
          })
        ));
    }),
    new Promise(function(resolve, reject) {
      // compile less to css
      gulp.src(styleEntry.less.src + '/[^_]*.less')
        .pipe(plumber({errorHandler: function(error) {
          gutil.log(gutil.colors.grey(error.message));
          handleErrors(error, 'Less');
          this.emit('end');
          reject();
        }}))
        .pipe(gulpif(styleEntry.sourcemap, sourcemaps.init()))
        .pipe(less({
          paths: [ path.join(__dirname, 'less', 'includes') ]
        }))
        .pipe(postcss(postcssPlugins))
        .pipe(concat(kendoOutput))
        .pipe(gulpif(styleEntry.sourcemap, sourcemaps.write('.')))
        .pipe(gulpif(global.isProd, header(config.banner.header, {pkg: pkg})))
        .pipe(gulp.dest(styleDest))
        .on('end', resolve)
        .pipe(gulpif(
          global.isWatching,
          browserSync.stream({
            match: '**/*.css'
          })
        ));
    })
  ]);

}

gulp.task('styleguidStyle', function() {
  return styleguidStyle();
});

gulp.task('uikitStyle', function() {
  return uikitStyle();
});

gulp.task('styles', ['styleguidStyle', 'uikitStyle'], function() {
  if(global.isProd) {
    // compile min.css
    uikitStyle(true);
    // copy sass, less source code
    gulp.src(config.uikit.styles.sass.src)
      .pipe(gulp.dest(config.uikit.styles.sass.destSrc));
    gulp.src(config.uikit.styles.kendo.src)
      .pipe(gulp.dest(config.uikit.styles.kendo.destSrc));
    // copy icomoon source code
    gulp.src(config.uikit.styles.icomoon.src)
      .pipe(gulp.dest(config.uikit.styles.icomoon.destSrc));
    // copy vital-ui-kit css to styleguide
    return gulp.src([
        (config.uikit.styles.destProd + '/' + config.uikit.styles.output),
        (config.uikit.styles.destProd + '/' + config.uikit.styles.outputKendo)
      ])
      .pipe(gulp.dest(config.styleguide.styles.destProd));
  }
});

