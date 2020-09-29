let gulp = require('gulp'),
    sass = require('gulp-sass');

function copy(done) {
    gulp.src('./scss/style.scss')
        .pipe(sass({
            errLogToConsole: true
        }))
        .on('error', console.error.bind(console))
        .pipe(gulp.dest('./css/'));
    done();
};
gulp.task(copy);