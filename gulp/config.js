'use strict';

var currentYear = new Date().getFullYear();

module.exports = {

  // -------------------------------------
  //   Server Port
  // -------------------------------------

    browserPort  : 1997,
    UIPort       : 1998,
    serverPort   : 1999,


  // -------------------------------------
  //   Stylesheets
  // -------------------------------------

    kitSass: {
      src: [
        'bower_components/tooltipster/dist/css/tooltipster.bundle.min.css',
        'src/**/*.+(sass|scss)'
      ],
      sourcemap: true,
      autoprefixer: {
        browsers: [
          'not ie <= 8',
          'last 2 versions'
        ],
        cascade: false
      },
      output: 'vital-ui-kit.css',
      outputMin: 'vital-ui-kit.min.css',
      dest: 'www/css',
      destProd: 'www/dist/css',
      sassProd: 'www/dist/scss'
    },

    styleguideSass: {
      src: [
        'styleguide/assets/styles/**/*.+(sass|scss)'
      ],
      sourcemap: true,
      autoprefixer: {
        browsers: [
          'not ie <= 8',
          'last 2 versions'
        ],
        cascade: false
      },
      output: 'styleguide.css',
      outputMin: 'styleguide.min.css',
      dest: 'www/css',
      destProd: 'www/styleguide/css'
    },


  // -------------------------------------
  //   Scripts
  // -------------------------------------

    kitScripts: {
      src: [
        // TODO: 若有套kendo, 需註解此行
        'bower_components/jquery/dist/jquery.min.js',
        'bower_components/tooltipster/dist/js/tooltipster.bundle.min.js',
        'src/scripts/**/*.js'
      ],
      output: 'vital-ui-kit.js',
      outputMin: 'vital-ui-kit.min.js',
      dest: 'www/js',
      destProd: 'www/dist/js'
    },

    styleguideScripts: {
      src: [
        'styleguide/assets/scripts/**/*.js',
      ],
      output: {
        'styleguide.js': [
          'styleguide/assets/scripts/styleguide/**/*.js'
        ],
        'landingpage.js': [
          'styleguide/assets/scripts/landingpage/ScrollMagic.js',
          'styleguide/assets/scripts/landingpage/TweenMax.min.js',
          'styleguide/assets/scripts/landingpage/animation.gsap.js',
          'styleguide/assets/scripts/landingpage/**/*.js'
        ],
        'template.js': [
          'styleguide/assets/scripts/template/**/*.js'
        ]
      },
      outputMin: {
        'styleguide.js': [
          'styleguide/assets/scripts/styleguide/**/*.js'
        ],
        'landingpage.js': [
          'styleguide/assets/scripts/landingpage/ScrollMagic.js',
          'styleguide/assets/scripts/landingpage/TweenMax.min.js',
          'styleguide/assets/scripts/landingpage/animation.gsap.js',
          'styleguide/assets/scripts/landingpage/**/*.js'
        ],
        'template.js': [
          'styleguide/assets/scripts/template/**/*.js'
        ]
      },
      dest: 'www/js',
      destProd: 'www/styleguide/js'
    },


  // -------------------------------------
  //   Templates
  // -------------------------------------

    styleguideHtml: {
      src: [
        'www/**/*.html'
      ],
      dest: 'www/',
      destProd: 'www/styleguide',
      htmlmin: {
        removeComments: true,
        collapseWhitespace: true,
        collapseInlineTagWhitespace: true
      }
    },


  // -------------------------------------
  //   Static Sources
  // -------------------------------------

    // Images
    images: {
      src: ['static/img/**/*.+(jpg|jpeg|gif|png|svg)'],
      filter: [],
      dest: 'www/img'
    },

    // Fonts
    fonts: {
      src: [
        'static/icomoon/fonts/**/*.+(woff|woff2|ttf|eot|svg)',
        'static/styleguide/fonts/**/*.+(woff|woff2|ttf|eot|svg)'
      ],
      dest: 'www/css/fonts'
    },

    // dependency
    'dependency': {
      'static': {
        'src': [
          'static/README.md'
        ],
        'dest': 'www'
      },
      'scripts': {
        'src': [
          // 'bower_components/kendo-ui-core/src/messages/kendo.messages.zh-TW.js'
        ],
        'dest': 'www/dist/js'
      },
      'styles': {
        'src': [
        ],
        'dest': 'www/dist/css'
      },
      'images': {
        'src': [
          'static/img/**/*'
        ],
        'dest': 'www/dist/img',
        'styleGuideDest': 'www/styleguide/img'
      },
      'fonts': {
        'src': [
          'static/icomoon/fonts/**/*.+(woff|woff2|ttf|eot|svg)'
        ],
        'styleguideSrc': [
          'static/icomoon/fonts/**/*.+(woff|woff2|ttf|eot|svg)',
          'static/styleguide/fonts/**/*.+(woff|woff2|ttf|eot|svg)'
        ],
        'dest': 'www/dist/css/fonts',
        'styleGuideDest': 'www/styleguide/css/fonts'
      }
    },


  // -------------------------------------
  //   Utitlity
  // -------------------------------------

    // gzip: {
    //   src: 'www/**/*.+(html|xml|json|css|js|js.map|css.map)',
    //   options: {},
    //   dest: 'www/'
    // },

    dist: {
      root: 'www',
      index: 'www/index.html'
    },

    // Banner
    banner: {
      header: [
                '/*******************************************',
                ' * Copyright ' + currentYear,
                ' *',
                ' * <%= pkg.name %>, v<%= pkg.version %>',
                ' * <%= pkg.description %>',
                ' *',
                ' * By <%= pkg.author %>',
                ' *',
                ' * License: <%= pkg.license %>',
                ' *',
                ' ******************************************/',
                ''
              ].join('\n')
    },


  // -------------------------------------
  //   Fabricator Assemble
  //   For developing usage, will deal with fabricator sources.
  // -------------------------------------

    fabricator:{
      src: ['styleguide/**/*.{html,md,yaml,json}'],
      assemble: {
        layout: 'styleguide-template',
        layouts: 'styleguide/views/layouts/*',
        layoutIncludes: 'styleguide/views/layouts/includes/*',
        data: 'styleguide/data/**/*.{json,yml}',
        materials: 'styleguide/materials/**/*',
        views: [
          'src/views/**/*.{html,md}',
          'styleguide/views/**/*',
          '!styleguide/views/+(layouts)/**'
        ],
        docs: 'styleguide/docs/**/*.md',
        keys: {
          materials: 'materials',
          views: 'views',
          docs: 'docs'
        },
        helpers: {},
        dest: 'www',
        destProd: 'www/styleguide'
      }
    },


  // -------------------------------------
  //   Tasks Runner (Dev, Prod, Watch)
  // -------------------------------------

    tasks: {
      dev:   ['fabricator', 'kitScripts', 'kitSass', 'styleguideSass', 'styleguideScripts', 'fonts', 'images'],
      watch: ['fabricator', 'kitScripts', 'kitSass', 'styleguideSass', 'styleguideScripts', 'fonts', 'images'],
      prod:  ['fabricator', 'kitScripts', 'kitSass', 'styleguideSass', 'styleguideScripts', 'dependency']
    }

};
