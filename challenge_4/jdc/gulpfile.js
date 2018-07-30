// include the required packages.
const gulp = require('gulp');
const stylus = require('gulp-stylus');
const sourcemaps = require('gulp-sourcemaps');
const browserSync = require('browser-sync');
const reload = browserSync.reload;


// Default gulp task to run
gulp.task('default', ['style-reload','copy','watch']);


// Get one .styl file and render
gulp.task('style-reload', function () {
  return gulp.src('src/stylus/screen.styl')
    .pipe(stylus())
    .pipe(sourcemaps.init())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./dist/css'))
    .pipe(reload({ stream:true }));
});

//
gulp.task('copy', function () {
  return gulp.src('src/views/index.html')
      .pipe(gulp.dest('./dist/'));
});


gulp.task('watch',['style-reload','copy'], () => {
  browserSync.init({
    server: {
      baseDir: 'dist'
    }
  });
	gulp.watch('src/stylus/screen.styl', ['style-reload']);
});
