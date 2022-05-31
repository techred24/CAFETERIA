const { src, dest, watch } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');

function css(done) {
    // Compilar sass
    // Pasos: 1 - identificar archivo, 2 - Compilarla, 3 - Guardar el .css
    src('src/scss/app.scss')
        .pipe( sass({outputStyle: 'compressed'}) )
        .pipe( postcss([ autoprefixer() ]) )
        .pipe( dest('build/css') )

    done();
}

function dev() {
    watch('src/scss/app.scss', css);
}

exports.css = css;
exports.dev = dev;