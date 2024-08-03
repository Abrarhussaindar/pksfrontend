const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const purgecss = require('gulp-purgecss')

const buildStyles = () => {
    return src('style.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(purgecss({ content: ['*.html'] }))
        .pipe(dest('css'));
};


const watchTask = () => {
    watch(['style.scss', '*.html'], buildStyles);
};


exports.default = series(buildStyles, watchTask);
