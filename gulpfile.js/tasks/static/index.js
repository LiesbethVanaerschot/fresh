const
    config = require('../../lib/configLoader'),
    changed = require('gulp-changed'),
    customNotifier = require('../../lib/customNotifier'),
    gulp = require('gulp'),
    path = require('path'),
    paths = {
        src: [
            path.join(config.root.src, config.tasks.static.src, '/**/*'),
            path.join('!' + config.root.src, config.tasks.static.src, '/README.md')
        ],
        dest: path.join(config.root.dest, config.tasks.static.dest)
    },
    staticTask = () => {
        return gulp.src(paths.src)
            .pipe(changed(paths.dest)) // Ignore unchanged files
            .pipe(gulp.dest(paths.dest))
            .pipe(customNotifier({ title: 'Static files copied' }));
    };

gulp.task('static', staticTask);
module.exports = staticTask;

