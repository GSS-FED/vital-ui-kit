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
          'styleguide/**/*.{html,md,yaml,json}',
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
            '!styleguide/views/+(layouts)/**',
            '!styleguide/views/kendo-demo.html',
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
      static: {
        kendo: 'styleguide/views/kendo-demo.html',
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
        sourcemap: false,
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
            'src/icomoon/fonts/**/*.+(woff|woff2|ttf|eot|svg)',
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
          destSrc: 'build/dist/sass'
        },
        less: {
          src: [
            'src/less/**'
          ],
          destSrc: 'build/dist/less'
        },
        icomoon: {
          src: [
            'src/icomoon/**/*'
          ],
          destSrc: 'build/dist/icomoon'
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
        outputKendo: 'kendo.custom.vital-ui-kit.css',
        outputMinKendo: 'kendo.custom.vital-ui-kit.min.css',
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
  //   Assets
  // -------------------------------------

    // dependency
    dependency: {
      src: [
        'assets/**/*',
        'styleguide/assets/+(img|icomoon)/**/*'
      ],
      document: {
        src: [
          'README.md'
        ],
        destProd: 'build'
      },
      scripts: {
        src: [
        ],
        dest: 'www/js',
        destProd: 'build/dist/js',
        styleguideDestProd: 'build/styleguide/js'
      },
      styles: {
        src: [
        ],
        dest: 'www/css',
        destProd: 'build/dist/css',
        styleguideDestProd: 'build/styleguide/css'
      },
      images: {
        src: [
          'assets/img/**/*'
        ],
        styleguideSrc: [
          'assets/img/**/*',
          'styleguide/assets/img/**/*'
        ],
        dest: 'www/img',
        destProd: 'build/dist/img',
        styleguideDestProd: 'build/styleguide/img'
      },
      fonts: {
        src: [
          'src/icomoon/fonts/**/*.+(woff|woff2|ttf|eot|svg)'
        ],
        styleguideSrc: [
          'src/icomoon/fonts/**/*.+(woff|woff2|ttf|eot|svg)',
          'styleguide/assets/icomoon/fonts/**/*.+(woff|woff2|ttf|eot|svg)'
        ],
        dest: 'www/fonts',
        destProd: 'build/dist/fonts',
        styleguideDestProd: 'build/styleguide/fonts'
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

    banner: {
      header: [
                '/*******************************************',
                ' * Copyright © ' + currentYear + ' <%= pkg.author %>',
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
      prod:  ['fabricator', 'scripts', 'styles', 'dependency', 'docs']
    }

};
