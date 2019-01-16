const gulp = require('gulp');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssvars = require('postcss-simple-vars');
const nested = require('postcss-nested');
const cssImport = require('postcss-import');
const mixins = require("postcss-mixins");

gulp.task("styles", function() {

  //enter gulp css to use this task

  //Be careful how these lines are spaced out - It could cause errors

  //cssImport should be the first task

  return gulp.src('./app/assets/styles/styles.css')
  .pipe(postcss([cssImport, mixins, cssvars, autoprefixer, nested]))

  //We must throw an error before the function ends

  .on("error", function(errorInfo) {
    console.log(errorInfo.toString());
    this.emit("end"); //The watch task wants to know when these tasks end, hence the .emit("end")
                      //It will just see that the task ended, like it normally would
  })

  .pipe(gulp.dest('./app/temp/styles'));

  /*
    -We use return because gulp.src is an asynchronous function
  */

});
