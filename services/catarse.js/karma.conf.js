process.env.CHROME_BIN = require('puppeteer').executablePath();

module.exports = (config) => {
    config.set({
        basePath: '',
        frameworks: ['jasmine'],
        files: [
            'legacy/spec/lib/mithril-query/mithril-query.js',
            'legacy/spec/lib/jasmine-species/jasmine-grammar.js',
            'legacy/spec/lib/jasmine-matchers.js',
            'legacy/spec/lib/jasmine-ajax/mock-ajax.js',
            'legacy/spec/lib/i18n/i18n.js',
            'legacy/spec/lib/matchers.js',
            'legacy/spec/lib/analytics.js',
            'node_modules/mithril/mithril.js',
            'node_modules/underscore/underscore.js',
            'node_modules/liquidjs/dist/liquid.js',
            'node_modules/mithril-postgrest/dist/mithril-postgrest.js',
            'node_modules/chart.js/Chart.js',
            'node_modules/moment/moment.js',
            'node_modules/select/dist/select.js',
            'node_modules/jquery/dist/jquery.min.js',
            'legacy/vendor/replaceDiacritics.js',
            'legacy/spec/lib/mocks/*mock.js',
            'legacy/spec/index.spec.js',
        ],
        preprocessors: {
            'legacy/spec/**/*.spec.js': ['webpack'],
            'legacy/spec/index.spec.js': ['webpack']
        },
        exclude: [],
        reporters: ['spec'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        singleRun: true,
        browsers: ['ChromeHeadless', 'CustomHeadless'],
        customLaunchers: {
            CustomHeadless: {
                base: 'ChromeHeadless',
                flags: [
                    '--no-sandbox'
                ]
            }
        }
    });
};
