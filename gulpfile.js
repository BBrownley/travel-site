/*
Notes:
  -When making changes to the gulp file, reset the task to update changes
*/

const
  gulp = require("gulp"),
  watch = require("gulp-watch"),
  postcss = require("gulp-postcss"),
  autoprefixer = require("autoprefixer"),
  cssvars = require("postcss-simple-vars"),
  nested = require("postcss-nested");

gulp.task("default", function() {
  //entering gulp in command line will run the default task
  console.log("Hooray - you created a Gulp task.");
});

gulp.task("html", function() {
  //enter gulp html to use this task
  console.log("HTML task running");
});

gulp.task("styles", function() {
  //enter gulp css to use this task

  //Be careful how these lines are spaced out - It could cause errors

  return gulp.src('./app/assets/styles/styles.css')
  .pipe(postcss([cssvars, autoprefixer, nested]))
  .pipe(gulp.dest('./app/temp/styles'));

  /*
    -We use return because gulp.src is an asynchronous function
  */

});

gulp.task("watch", function() {
  watch("./app/index.html", function() {
    //look for saved changes in index.html and call the html task
    gulp.start("html");
  });
  watch("./app/assets/styles/**/*.css", function() {
    gulp.start("styles");
  });
});
