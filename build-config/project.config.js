'use strict';

module.exports = {

  build: {
    less: {
      enabled: false
    },
    bless: {
      enabled: false
    },
    spec: {
      runInPrepare: false
    },
    e2e: {
      runInDev: false,
      runInDist: false
    },
    server: {
      runInDist: true
    }
  },

  app: {
    files: {
      templates2js: [
      ],
      translations: [ ],
      translations2js: [ ]
    }
  },

  vendor: {
    files: {
      js: [
        'angular/angular.js',
        'google-code-prettify/src/prettify.js',
        'w11k-select/dist/w11k-select.js',
        'w11k-select/dist/w11k-select.tpl.js',
        'angular-bindonce/bindonce.js',
        'w11k-dropdownToggle/dist/w11k-dropdownToggle.js'
      ],
      js_mock: [
      ],
      js_spec: [
      ],
      js_e2e: [
      ],
      css: [
      ],
      assets: [
        'font-awesome/fonts/*.*'
      ]
    }
  }
};
