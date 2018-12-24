const gulp = require('gulp');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssvars = require('postcss-simple-vars');
const nested = require('postcss-nested');
const cssImport = require('postcss-import');

gulp.task("styles", function() {
  //enter gulp css to use this task

  //Be careful how these lines are spaced out - It could cause errors

  //cssImport should be the first task

  return gulp.src('./app/assets/styles/styles.css')
  .pipe(postcss([cssImport, cssvars, autoprefixer, nested]))
  .pipe(gulp.dest('./app/temp/styles'));

  /*
    -We use return because gulp.src is an asynchronous function
  */

});
