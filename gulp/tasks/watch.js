const gulp = require('gulp');
const watch = require("gulp-watch");
const browserSync = require("browser-sync").create() /*browser-sync has many methods, we
only need the .create() method, hence the .create() at the end */

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
