module.exports = {
    'taskName': 'templates',
    'src': 'templates',
    'dest': './',
    'dataFile': 'data/global.json',
    'htmlmin': {
        'collapseWhitespace': true
    },
    'extensions': ['njk', 'json'],
    'excludeFolders': ['layouts', 'shared', 'macros', 'data']
};
