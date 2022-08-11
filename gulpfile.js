const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

gulp.task('css', () => {
  return gulp.src('./scss/**/*scss')
    .pipe(sass())
    .pipe(gulp.dest('./css'))
})

gulp.watch("./scss/**/*.scss", gulp.series("style.css"));
gulp.task("start", gulp.series("styles.css"));
