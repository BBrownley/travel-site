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
  nested = require("postcss-nested"),
  cssImport = require("postcss-import"),

  browserSync = require("browser-sync").create() /*browser-sync has many methods, we
  only need the .create() method, hence the .create() at the end */

  ;

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

  //cssImport should be the first task

  return gulp.src('./app/assets/styles/styles.css')
  .pipe(postcss([cssImport, cssvars, autoprefixer, nested]))
  .pipe(gulp.dest('./app/temp/styles'));

  /*
    -We use return because gulp.src is an asynchronous function
  */

});

gulp.task("watch", function() {

  //.init starts the server

  browserSync.init( {

    //We want to create a few settings

    server: {
      baseDir: "app" /*Where should the server point to?
      (i.e. where does the index.html live) - It's in the app folder */
    },

    browser: ["chrome.exe"] //Open chrome as default browser

  });

  watch("./app/index.html", function() {
    //look for saved changes in index.html and use the reload method
    browserSync.reload();
  });
  watch("./app/assets/styles/**/*.css", function() {
    gulp.start("cssInject");
  });
});

gulp.task("cssInject", ["styles"] ,function() {

  /*In this case, the second argument must be run first before anything else
  */

  return gulp.src("./app/temp/styles/styles.css")
    .pipe(browserSync.stream());
});
