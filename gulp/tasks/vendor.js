'use strict';

var config       = require('../config');
var gulp         = require('gulp');
var gulpif       = require('gulp-if');
var plumber      = require('gulp-plumber');
var concat       = require('gulp-concat');
var uglify       = require('gulp-uglify');
var sourcemaps   = require('gulp-sourcemaps');
var postcss      = require('gulp-postcss');
var cssnano      = require('cssnano');
var header       = require('gulp-header');
var handleErrors = require('../util/handleErrors');
var browserSync  = require('browser-sync');
var pkg          = require('../../package.json');
var del          = require('del');

// -------------------------------------
//   Vendor Scripts
// -------------------------------------

function vendorScripts(type) {
  
  var vendorEntry = type === 'vendor'? config.vendor : config.devVendor;
  var src = vendorEntry.scripts.src;
  var dest = global.isProd? vendorEntry.scripts.destProd : vendorEntry.scripts.dest;

  switch(vendorEntry.scripts.uiDependency) {
    case 'bootstrap':
      src = vendorEntry.scripts.bootstrapSrc.concat(src);
      break;
    case 'kendo':
      src = vendorEntry.scripts.kendoSrc.concat(src);
      break;
  }

  if(global.isProd && type === 'vendor') {

    // original
    gulp.src(src)
      .pipe(plumber({errorHandler: function(error) {
        handleErrors(error, 'Vendor Script');
        this.emit('end');
      }}))
      .pipe(concat(vendorEntry.scripts.output))
      .pipe(header(config.banner.header, {pkg: pkg})) // Header Banner
      .pipe(gulp.dest(dest));
    // min
    return gulp.src(src)
      .pipe(plumber({errorHandler: function(error) {
        handleErrors(error, 'Vendor Script');
        this.emit('end');
      }}))
      .pipe(concat(vendorEntry.scripts.outputMin))
      .pipe(uglify())
      .pipe(header(config.banner.header, {pkg: pkg})) // Header Banner
      .pipe(gulp.dest(dest));

  } else {
    return gulp.src(src)
      .pipe(plumber({errorHandler: function(error) {
        handleErrors(error, 'Vendor Script');
        this.emit('end');
      }}))
      .pipe(concat(vendorEntry.scripts.output))
      .pipe(uglify())
      .pipe(gulp.dest(dest))
      .pipe(gulpif(global.isWatching, 
        browserSync.stream({ once: true })
      ));
  }

};


// -------------------------------------
//   Vendor Styles
// -------------------------------------

function vendorStyles(type) {

  var vendorEntry = type === 'vendor'? config.vendor : config.devVendor;
  var dest = global.isProd? vendorEntry.styles.destProd : vendorEntry.styles.dest;

  if(global.isProd && type === 'vendor') {

    // original
    gulp.src(vendorEntry.styles.src)
      .pipe(plumber({errorHandler: function(error) {
        handleErrors(error, 'Vendor Styles');
        this.emit('end');
      }}))
      .pipe(sourcemaps.init())
      .pipe(concat(vendorEntry.styles.output))
      .pipe(sourcemaps.write('.'))
      .pipe(header(config.banner.header, {pkg: pkg})) // Header Banner
      .pipe(gulp.dest(dest));
    // min
    gulp.src(vendorEntry.styles.src)
      .pipe(plumber({errorHandler: function(error) {
        handleErrors(error, 'Vendor Styles');
        this.emit('end');
      }}))
      .pipe(sourcemaps.init())
      .pipe(concat(vendorEntry.styles.outputMin))
      .pipe(postcss([ cssnano() ]))
      .pipe(sourcemaps.write('.'))
      .pipe(header(config.banner.header, {pkg: pkg})) // Header Banner
      .pipe(gulp.dest(dest));
    return del(['www/tmp']);

  } else {
    return gulp.src(vendorEntry.styles.src)
      .pipe(plumber({errorHandler: function(error) {
        handleErrors(error, 'Vendor Styles');
        this.emit('end');
      }}))
      .pipe(sourcemaps.init())
      .pipe(concat(vendorEntry.styles.output))
      .pipe(postcss([ cssnano() ]))
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest(dest));
  }
    
};


// -------------------------------------
//   Combined Vendors
// -------------------------------------

gulp.task('devVendor', function() {
  vendorScripts('devVendor');
  return vendorStyles('devVendor');
});
gulp.task('vendor', function() {
  vendorScripts('vendor');
  return vendorStyles('vendor');
});
