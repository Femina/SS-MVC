'use strict';

// ---------------------------------------
// Require Gulp & Plugins
// *****
// You'll see in this section below I broke up each require into it's own line for a future change I'll explain later.
// ---------------------------------------


var gulp 	= require('gulp');
var connect = require('gulp-connect');
var webserver = require('gulp-webserver');
var opn     = require('opn');

var server = {
  host: 'localhost',
  port: '8001'
}

gulp.task('webserver', function() {
  gulp.src( 'SS_Styleguide/' )
    .pipe(webserver({
      host:             server.host,
      port:             server.port,
      livereload:       true,
      directoryListing: false,
      fallback: '/index.html'
    }));
});

gulp.task('openbrowser', function() {
  opn( 'http://' + server.host + ':' + server.port );
});

gulp.task('html', function () {
  gulp.src('./SS_Styleguide/*.html')
    .pipe(connect.reload());
});

gulp.task('watch', function () {
  gulp.watch(['./SS_Styleguide/*.html'], ['html']);
});

gulp.task('default', ['webserver','openbrowser','watch']);