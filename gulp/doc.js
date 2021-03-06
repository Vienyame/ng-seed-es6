'use strict';

var gulp = require('gulp'),
    conf = require('./conf'),
    $ = require('gulp-load-plugins')({
        pattern: ['gulp-*', 'del', 'run-sequence']
    });

gulp.task('clean-doc', function() {
    return $.del([
        conf.paths.doc
    ], function(err, deletedFiles) {
        console.log('Docs files deleted');
    });
});

gulp.task('ng-doc', function() {
    var options = {
        startPage: '/accueil/accueil',
        html5Mode: false,
        bestMatch: true,
        styles: [
            conf.paths.src + '/doc/project.doc.css'
        ]
    };

    return $.ngdocs.sections({
        code: {
            glob: [conf.paths.tmp + '/serve/{app,components}/**/*.js'],
            api: true,
            title: 'Code',
            startPage: '/code/src'
        },
        accueil: {
            glob: [conf.paths.src + '/doc/*.ngdoc'],
            title: 'ng-seed with ES2015 Frontend app Documentation'
        }
    }).pipe($.ngdocs.process(options)).pipe(gulp.dest(conf.paths.doc));
});

gulp.task('archi-graph', function() {
    gulp.src(conf.paths.tmp + '/serve/{app,components}/**/*.js')
        .pipe($.angularArchitectureGraph({
            dest: conf.paths.doc + '/img'
        }));
});

gulp.task('doc', function() {
    $.runSequence(
        'clean-doc',
        'ng-doc'
        ,'archi-graph'
    );
});
