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
  //   Styleguide
  // -------------------------------------

    styleguide: {
      fabricator: {
        src: [
          'styleguide/**/*.{html,md,yaml,json}'
        ],
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
          destProd: 'build/styleguide'
        }
      },
      views: {
        src: 'www/**/*.html',
        srcProd: 'build/styleguide/**/*.html',
        dest: 'www',
        destProd: 'build/styleguide',
        htmlmin: {
          removeComments: true,
          collapseWhitespace: true,
          collapseInlineTagWhitespace: true
        }
      },
      styles: {
        src: [
          'styleguide/assets/styles/**/*.+(sass|scss)',
        ],
        sass: {
          src: [
            'styleguide/assets/styles/**/*.+(sass|scss)'
          ],
        },
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
        destProd: 'build/styleguide/css'
      },
      scripts: {
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
        destProd: 'build/styleguide/js'
      },
      assets: {
        img: {
          src: [
            'assets/img/**/*.+(jpg|jpeg|gif|png|svg)'
          ],
          filter: [],
          dest: 'www/img'
        },
        fonts: {
          src: [
            'assets/icomoon/fonts/**/*.+(woff|woff2|ttf|eot|svg)',
            'assets/styleguide/fonts/**/*.+(woff|woff2|ttf|eot|svg)'
          ],
          dest: 'www/css/fonts'
        },
      },
    },


  // -------------------------------------
  //   UI Kit
  // -------------------------------------

    uikit: {
      styles: {
        src: [
          'src/sass/**/*.+(sass|scss)',
          'src/less/**/*.less'
        ],
        sass: {
          src: [
            'src/sass/**/*.+(sass|scss)'
          ],
          destSrc: 'build/dist/scss'
        },
        less: {
          src: [
            'src/less/**'
          ],
          destSrc: 'build/dist/less'
        },
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
        destProd: 'build/dist/css'
      },
      scripts: {
        src: [
          'src/scripts/**/*.js'
        ],
        output: 'vital-ui-kit.js',
        outputMin: 'vital-ui-kit.min.js',
        dest: 'www/js',
        destProd: 'build/dist/js'
      },
    },


  // -------------------------------------
  //   Document (for github page)
  // -------------------------------------



  // -------------------------------------
  //   Assets
  // -------------------------------------

    // dependency
    dependency: {
      src: [
        'assets/**/*'
      ],
      assets: {
        src: [
          'README.md'
        ],
        dest: 'build'
      },
      scripts: {
        src: [
        ],
        dest: 'build/dist/js'
      },
      styles: {
        src: [
        ],
        dest: 'build/dist/css'
      },
      images: {
        src: [
          'assets/img/**/*'
        ],
        dest: 'build/dist/img',
        styleGuideDest: 'build/styleguide/img'
      },
      fonts: {
        src: [
          'assets/icomoon/fonts/**/*.+(woff|woff2|ttf|eot|svg)'
        ],
        styleguideSrc: [
          'assets/icomoon/fonts/**/*.+(woff|woff2|ttf|eot|svg)',
          'assets/styleguide/fonts/**/*.+(woff|woff2|ttf|eot|svg)'
        ],
        dest: 'build/dist/css/fonts',
        styleGuideDest: 'build/styleguide/css/fonts'
      }
    },


  // -------------------------------------
  //   Utitlity
  // -------------------------------------

    root: {
      dist: 'www',
      build: 'build',
      docs: 'docs',
      buildDist: 'build/dist',
      buildStyleguide: 'build/styleguide',
    },

    zip: {
      src: 'build/**/*',
      filename: 'vital-ui-kit.zip',
      dest: 'build'
    },

    banner: {
      header: [
                '/*******************************************',
                ' * Copyright ' + currentYear,
                ' *',
                ' * <%= pkg.name %>, v<%= pkg.version %>',
                ' * <%= pkg.description %>',
                ' *',
                ' * By <%= pkg.contributors %>',
                ' *',
                ' * License: <%= pkg.license %>',
                ' *',
                ' ******************************************/',
                ''
              ].join('\n')
    },


  // -------------------------------------
  //   Tasks Runner
  // -------------------------------------

    tasks: {
      dev:   ['fabricator', 'scripts', 'styles', 'dependency'],
      watch: ['fabricator', 'scripts', 'styles', 'dependency'],
      prod:  ['fabricator', 'scripts', 'stylesProd', 'dependency', 'docs', 'zip']
    }

};
