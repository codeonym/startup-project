var gulp = require('gulp'),
    concat = require('gulp-concat'),
    sass = require('gulp-sass')(require("sass")),
    prefix = require('gulp-autoprefixer'),
    pug = require('gulp-pug'),
    //livereload = require('gulp-livereload'),
    sourcemaps = require('gulp-sourcemaps')
    minify = require('gulp-minify'),
    connect = require('gulp-connect')
    ,uglify = require('gulp-uglify');

// html task
// gulp.task('html', function () {
//     return gulp.src("./stage/html/*.pug")
//             .pipe(pug({
//                 pretty: true
//             }))
//             .pipe(gulp.dest("./dist"))
//             .pipe(livereload());
// });
//html task 
gulp.task("html", function () {
    return  gulp.src('./src/html/*.pug')
            .pipe(pug({ pretty:true}))
            .pipe(gulp.dest('./dist'))
            .pipe(connect.reload());
})

//css task
gulp.task("css", function () {
    return  gulp.src(["./src/css/**/*.scss","./src/css/**/*.css"])
            .pipe(sourcemaps.init())
            .pipe(sass({outputStyle:'compressed'}))
            .pipe(prefix())
            .pipe(concat("main.css"))
            .pipe(sourcemaps.write("."))
            .pipe(gulp.dest("./dist/css"))
});

//scripts task
gulp.task("scripts",function(){
    return gulp.src("./src/js/*.js")
    .pipe(concat("main.js"))
    .pipe(uglify("."))
    .pipe(gulp.dest("./dist/js"));
});
// connect task
gulp.task('connect', function() {
    connect.server({ 
        root: './dist',
        livereload: true,
        port: 8000
    });
  });
  // watch task 
  gulp.task('watch', function () {
    gulp.watch('./src/html/*.pug', gulp.series("html"));
    gulp.watch('./src/html/**/*.pug', gulp.series("html"));
    gulp.watch('./src/css/**/*.scss', gulp.series("css"));
    gulp.watch('./src/css/*.scss', gulp.series("css"));
    gulp.watch('./src/js/*.js', gulp.series("scripts"));
  });
   
  gulp.task('default', gulp.parallel(['connect','watch']));