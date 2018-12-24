/*
Notes:
  -When making changes to the gulp file, reset the task to update changes
*/

// const
//   gulp = require("gulp"),
//
//
//
//   ;

// gulp.task("default", function() {
//   //entering gulp in command line will run the default task
//   console.log("Hooray - you created a Gulp task.");
// });
//
// gulp.task("html", function() {
//   //enter gulp html to use this task
//   console.log("HTML task running");
// });

require("./gulp/tasks/styles");
require("./gulp/tasks/watch");
