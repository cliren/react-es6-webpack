var browserSync = require('browser-sync');
var gulp = require('gulp');
var config = require('../config').browserSync;

gulp.task('browserSync', ['webpack', 'markup', 'images', 'mocks'], function() {
  browserSync(config);
});

var proxyMiddleware = require('http-proxy-middleware');
var proxyURL = 'http://vm:8080';

gulp.task('browserSync', ['webpack', 'markup'], function() {
  var authProxy = proxyMiddleware('/users', {target: proxyURL});
  var nitroProxy = proxyMiddleware('/nitro', {target: proxyURL});
  var clemensProxy = proxyMiddleware('/api', {target: proxyURL});

  config.server.middleware = [authProxy, nitroProxy, clemensProxy];

  browserSync(config);
});
