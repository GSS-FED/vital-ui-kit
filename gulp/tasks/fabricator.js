'use strict';

var config       = require('../config');
var gulp         = require('gulp');
var gulpif       = require('gulp-if');
var gutil        = require('gulp-util');
var plumber      = require('gulp-plumber');
var assemble     = require('fabricator-assemble');
var objectAssign = require('object-assign');
var handleErrors = require('../util/handleErrors');
var browserSync  = require('browser-sync');


// -------------------------------------
//   Fabricator Assemble
// -------------------------------------

  gulp.task('fabricator-assemble', function () {

    var params = config.fabricator.assemble;
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

  gulp.task('fabricator', ['styleguideHtml'], function() {
    if(global.isWatching) {
      browserSync.reload({ stream:true });
    }
  });
