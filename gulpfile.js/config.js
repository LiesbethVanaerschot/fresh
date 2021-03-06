const
    getArg = require('./lib/getArg'),
    destFolder = getArg('--build') ? './build' : './public',
    requireDir = require('require-dir');

module.exports = {
    'root': {
        'src': './src',
        'dest': destFolder
    },

    'tasks': {
        'browserSync': {},
        'static': {},
        'fonts': {},
        'webpack': {
            'babel': {
                'presets': [['es2015', { 'modules': false }], 'react', 'stage-1'],
                'plugins': [
                    'transform-react-jsx',
                    'transform-decorators-legacy'
                ]
            },
            'entries': {
                'app': ['./app.js']
            }
        },
        'css': {},
        'images': {},
        'svgsprite': {},
        'production': {},
        'eslint': {},
        'stylelint': {}
    }
};
