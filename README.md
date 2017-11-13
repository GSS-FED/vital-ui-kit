<p align="center">
  <a href="https://gss-fed.github.io/vital-ui-kit/">
    <img src="https://raw.githubusercontent.com/GSS-FED/vital-ui-kit/develop/assets/img/icon.png" alt="" width=72 height=72 />
  </a>
</p>
<h3 align="center">Vital UI Kit</h3>
<p align="center">
  簡單、輕量級、模組化的 UI library
  <br>
  <a href="https://gss-fed.github.io/vital-ui-kit/getting-started.html">
    <strong>View Documents &raquo;</strong>
  </a>
  <br>
</p>

[![Join the chat at https://gitter.im/GSS-FED/vital-ui-kit](https://badges.gitter.im/GSS-FED/vital-ui-kit.svg)](https://gitter.im/GSS-FED/vital-ui-kit?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
[![npm version](https://img.shields.io/npm/v/vital-ui-kit.svg)](https://www.npmjs.com/package/vital-ui-kit)
[![Build Status](https://img.shields.io/travis/GSS-FED/vital-ui-kit.svg)](https://travis-ci.org/GSS-FED/vital-ui-kit)
[![devDependency Status](https://img.shields.io/david/dev/GSS-FED/vital-ui-kit.svg)](https://david-dm.org/GSS-FED/vital-ui-kit?type=dev)

## Intro

Vital UI Kit 使用簡單、輕量級、模組化的 UI library。 Vital UI Kit 不不僅整理了常用又實用的元件，而且每一項元素都經過設計師與工程師合力精雕細琢產生，讓您在實作上能輕易的應用，也兼顧設計性、互動性與易用性。

* 適合各系統畫面
* 整合了常用的前端框架
* 重視使用者經驗
* 與 Kendo UI 風格無縫整合


## Dependency

- [Jquery](https://jquery.com/)


## Development Dependency

- [Icomoon](https://icomoon.io/)
- [Fabricator](https://fbrctr.github.io/)


## Installation

```
npm install vital-ui-kit
```


## Quick Start

Vital UI Kit 提供了兩種使用方式，您可以依照喜好或是情況選擇適合您的方式開始應用。

1. 直接開始使用 Vital UI Kit

    如果您不需要建立開發環境，可以使用以下方式，方便且快速地應用 Vital UI Kit 在您的產品或專案上。

    1. 下載 [Vital UI Kit](https://github.com/GSS-FED/vital-ui-kit/archive/build.zip) 並解壓縮

    1. 將 `dist` 資料夾底下的 `css`、`fonts`、`img`、`js` 資料夾複製到您的專案環境根目錄

    1. 在您的 Html 中引入

        ```
        <link rel="stylesheet" href="./css/vital-ui-kit.css">
        (optional) <link rel="stylesheet" href="./css/kendo.custom.vital-ui-kit.css">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
        <script src="./js/vital-ui-kit.js"></script>
        ```

    接下來只要按照 `styleguide/index.html` 的說明，即可立刻看到套用 Vital UI Kit 的效果了！


1. 客製化 Vital UI Kit

    如果您是開發者，想要客製化自己的 Vital UI Kit、更改 UI Kit 顏色，可使用以下方法。

    1. `npm install vital-ui-kit`

    1. 在專案環境引用 `node_modules/vital-ui-kit/dist` 資料夾底下的 `fonts`、`img`、`js`

    1. 在專案環境引用 `node_modules/vital-ui-kit/sass` 資料夾，編譯輸出的 css 檔案路徑需和 `fonts` 平行

    1. 在 `vital-ui-kit.scss` 可 import 自己客製化的變數檔與加入樣式，可參考 `~sass/base/_variables.scss` 看有哪些變數可供更改。

        ```
        sass/
        ├── base/
        │    ├── _variables.scss
        │    ├── ...
        ├── components/
        ├── structures/
        ├── utils/
        ├── _core.scss
        └── vital-ui-kit.scss
        ```


## File Structure

安裝後的資料夾中， `build/dist/` 包含編譯後的原始檔案與壓縮檔，與 css 編譯前的 sass 原始檔案，提供給開發者修改變數、客製化樣式。

`build/styleguide/` 包含 Vital UI Kit 的使用說明，可打開 `index.html` 閱讀。

我們也提供 [Kendo](https://www.telerik.com/kendo-ui) 套件的樣式，目前支援版本 `kendo-ui-core^1.0.0`，2016 以後的版本樣式仍在開發中，可從線上 [less2016](https://github.com/GSS-FED/vital-ui-kit/tree/master/src/less2016) 資料夾看到測試中的 less 原碼，自行下載採用。

```
vital-ui-kit/
├── dist/
│    ├── css/
│    │    ├── kendo.custom.vital-ui-kit.css
│    │    ├── vital-ui-kit.css
│    │    ├── ...
│    ├── js/
│    │    ├── vital-ui-kit.js
│    │    ├── ...
│    ├── img/
│    ├── fonts/
│    ├── less/
│    └── sass/
├─── styleguide/
│    ├── index.html
│    ├── ...
```

## Browser Support

為了網頁技術的推進，以及為使用者帶來更好的體驗，瀏覽器支援度我們會專注在最新版的主流瀏覽器上。

| [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/edge.png" alt="IE / Edge" width="16px" height="16px" />](http://godban.github.io/browsers-support-badges/)</br>IE / Edge | [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/firefox.png" alt="Firefox" width="16px" height="16px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/chrome.png" alt="Chrome" width="16px" height="16px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/safari.png" alt="Safari" width="16px" height="16px" />](http://godban.github.io/browsers-support-badges/)</br>Safari | [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/opera.png" alt="Opera" width="16px" height="16px" />](http://godban.github.io/browsers-support-badges/)</br>Opera |
| :---------: | :---------: | :---------: | :---------:| :---------: |
| IE9, IE10, IE11, Edge|  ✓ |  ✓ |  ✓ |  ✓ 


## Copyright and License

The MIT License

Copyright © 2017 Galaxy Software Services

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
