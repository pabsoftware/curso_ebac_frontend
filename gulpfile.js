const gulp = require('gulp');
//importação composta
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps')
//plugin para minificar ou comprimir codego java scripts
const uglify = require('gulp-uglify')
//plugin para obfucar codigo js ou seja torná-lo inlegível
const obfuscate = require('gulp-obfuscate');
//plugin para compressao de imagens
const imagemim = require('gulp-imagemin');


function comprimiImagem(){
    return gulp.src('./source/img/*')
    .pipe(imagemim())
    .pipe(gulp.dest('./build/img'))
}

function comprimeJavaScript(){
    return gulp.src('./source/scripts/*.js')
    .pipe(uglify())
    .pipe(obfuscate())
    .pipe(gulp.dest('./build/scripts'))
}

//função para tranforma arquivos scss dos sass em css com os diretorios de entrada 'src' e saida 'dest' = destino
function compilaSass(){
    return gulp.src('./source/styles/main.scss')
    .pipe(sourcemaps.init())
    //saida arquivo normal sem compressao
    //.pipe(sass())
    //saida do arquivo minificado ou comprimido
    .pipe(sass({
        outputStyle: 'compressed'
    }))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('./build/styles'));
}



exports.default = function(){
    gulp.watch('./source/styles/*.scss', {ignoreInitial: false}, gulp.series(compilaSass));
    gulp.watch('./source/img/*', {ignoreInitial: false}, gulp.series(comprimiImagem));
    gulp.watch('../source/scripts/*.js', {ignoreInitial: false}, gulp.series(comprimeJavaScript));
}

exports.javascript = comprimeJavaScript;
exports.imagens = comprimiImagem;
