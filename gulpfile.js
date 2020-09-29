let gulp = require('gulp');

function copy(done) {
    gulp.src('./scss/style.scss')
        .pipe(gulp.dest('./css/'))
    done();
};
gulp.task(copy);