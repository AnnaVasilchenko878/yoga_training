let gulp = require('gulp'),
    sass = require('gulp-sass'),
    sourceMaps = require('gulp-sourcemaps');

function build(done) {
    gulp.src('./scss/style.scss')
        .pipe(sourceMaps.init())
        .pipe(sass({
            errLogToConsole: true,
            outputStyle: 'compressed'
        }))
        .on('error', console.error.bind(console))
        .pipe(sourceMaps.write())
        .pipe(gulp.dest('./css/'));
    done();
};
gulp.task(build);