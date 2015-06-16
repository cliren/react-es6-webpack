var path = require('path');
var dest = './dist',
  src = './src',
  karmaPath = path.join(__dirname, '../karma.conf.js');

var images = [
  src + "/**/*.png"
];

var markup = [
  src + "/**/*.html"
];

var styles = [
  src + "/**/*.less"
];

var sources = [
  src + "/**/*.js",
  src + "/**/*.jsx"
];

var assets = [].concat(images).concat(markup);

module.exports = {
  browserSync: {
    server: {
      baseDir: [dest]
    },
    files: [
      dest + '/**'
    ],
    open: false
  },
  markup: {
    src: markup,
    dest: dest
  },
  less: {
    src: styles,
    dest: dest
  },
  images: {
    src: images,
    dest: dest
  },
  karma: karmaPath,
  mocks: {
    src: src + "/**/*.json",
    dest: dest
  },
  sources: sources,
  assets: assets,
  src: src,
  dest: dest
};
