<p align="center">
  <h1 align="center">Vital UI Kit</h1>
  <p align="center">
    簡單、輕量級、模組化的 UI library
    <br>
    <a href="https://gss-fed.github.io/vital-ui-kit/"><strong>View Documents &raquo;</strong></a>
    <br>
  </p>
</p>
<br>


## Intro

Vital UI Kit 使用簡單、輕量級、模組化的 UI library。 Vital UI Kit 不不僅整理了常用又實用的元件，而且每一項元素都經過設計師與工程師合力精雕細琢產生，讓您在實作上能輕易的應用，也兼顧設計性、互動性與易用性。

* 適合各系統畫面
* 整合了常用的前端框架
* 重視使用者經驗
* 與Kendo UI風格無縫整合


## Quick Start

 Vital UI Kit 提供了兩種使用方式，您可以依照喜好或是情況選擇適合您的方式開始應用。

**[直接下載 Vital UI Kit](https://github.com/GSS-FED/Vital-UI-Kit/raw/master/build/vital-ui-kit.zip)**

如果您不需要開發原始碼或是還不熟悉Sass，您可以使用此種方式，方便且快速就可以應用 Vital UI Kit 在您的產品或專案上。

**使用 Npm & Gulp**

1. 在使用 Gulp 之前，請先至Vital UI Kit，利用版本控管工具 clone 整份檔案到您的本地端(建議使用Https)。

1. 下載後，請打開您的終端機並且將路徑改成 Step 1.的資料夾，並輸入： `npm install`

    這個動作我們會幫您建立 Vital UI Kit 所需要用到的工具：Node.js 與 Bower

    您可以至 Gulp, Node.js, NPM 以及 Bower 進一步了解它們。

1. 接著再執行 `npm start` 專案便會開始啟動！

1. 別急，接下來記得在 Html 中引入

```
<link rel="stylesheet" href="./css/basic.css">
```

```
<script src="./js/jquery.min.js"></script>
<script src="./js/vital-ui-kit.js"></script>
```


## File Structure

下載後的資料夾中, `dist/` 包含編譯後的原始檔案與壓縮檔，與 css 編譯前的 sass 原始檔案，提供給開發者修改變數、客製化樣式。
`styleguide/` 包含 Vital UI Kit 的使用說明，可打開 `index.html` 閱讀。並包含 `README.md` 說明檔。

```
vital-ui-kit/
├── dist/
│    ├── css/
│    │    ├── fonts
│    │    ├── vital-ui-kit.css
│    │    ├── vital-ui-kit.min.css
│    │    └── vital-ui-kit.min.css.map
│    ├── js/
│    │    ├── vital-ui-kit.js
│    │    └── vital-ui-kit.min.js
│    └── scss/
│         ├── vital-ui-kit.scss
│         ├── ...
├── styleguide/
│    ├── index.html
│    ├── ...
└── README.md   
```


# Browser Support

為了網頁技術的推進，以及為使用者帶來更好的體驗，瀏覽器支援度我們會專注在最新版的主流瀏覽器上。

| [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/edge.png" alt="IE / Edge" width="16px" height="16px" />](http://godban.github.io/browsers-support-badges/)</br>IE / Edge | [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/firefox.png" alt="Firefox" width="16px" height="16px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/chrome.png" alt="Chrome" width="16px" height="16px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/safari.png" alt="Safari" width="16px" height="16px" />](http://godban.github.io/browsers-support-badges/)</br>Safari | [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/opera.png" alt="Opera" width="16px" height="16px" />](http://godban.github.io/browsers-support-badges/)</br>Opera |
| :---------: | :---------: | :---------: | :---------:| :---------: |
| IE9, IE10, IE11, Edge|  ✓ |  ✓ |  ✓ |  ✓ 


# Copyright and License

[MIT License](https://github.com/GSS-FED/Vital-UI-Kit/blob/master/LICENSE)

