const gulp = require("gulp");
const webpack = require("webpack");

gulp.task("scripts", function(callback) {
  webpack(require("../../webpack.config.js"), function(err, stats) { //Webpack gives us access to err and stats

    if (err) {
      console.log(err.toString());
    }

    console.log(stats.toString());
    callback(); //Tells gulp that the task has been completed

  });
});
