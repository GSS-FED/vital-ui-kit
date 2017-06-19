# Vital UI Kit

Vital UI Kit 使用簡單、輕量級、模組化的 UI library。 Vital UI Kit 不不僅整理了常用又實用的元件，而且每一項元素都經過設計師與工程師合力精雕細琢產生，讓您在實作上能輕易的應用，也兼顧設計性、互動性與易用性。

* 適合各系統畫面
* 整合了常用的前端框架
* 重視使用者經驗
* 與Kendo UI風格無縫整合

## 檔案結構

```
dist                          所有 ui kit resources (css, js...)
├── css
│    ├── fonts
│    ├── vital-ui-kit.css
│    ├── vital-ui-kit.min.css
│    └── vital-ui-kit.min.css.map
├── js
│    ├── vital-ui-kit.js
│    └── vital-ui-kit.min.js
├── scss
│   ├── base
│   ├── components
│   ├── scripts
│   ├── structures
│   ├── utils
│   ├── _core.scss
│   └── vital-ui-kit.scss
│
styleguide                   ui kit style guide, index.html entry
```


# Ui kit 使用說明
 Vital UI Kit 提供了兩種使用方式，您可以依照喜好或是情況選擇適合您的方式開始應用。

**直接下載 Vital UI Kit**

[下載](https://github.com/GSS-FED/Vital-UI-Kit/releases/download/v0.0.4/vital-ui-kit-0.0.4.zip)
如果您不需要開發原始碼或是還不熟悉Sass，您可以使用此種方式，方便且快速就可以應用 Vital UI Kit 在您的產品或專案上。

**使用 Npm & Gulp**

Step 1. 在使用 Gulp 之前，請先至Vital UI Kit，利用版本控管工具 clone 整份檔案到您的本地端(建議使用Https)。

Step 2. 下載後，請打開您的終端機並且將路徑改成 Step 1.的資料夾，並輸入： `npm install`

這個動作我們會幫您建立 Vital UI Kit 所需要用到的工具：Node.js 與 Bower
您可以至Gulp,Node.js,NPM以及Bower進一步了解它們。

Step 3. 接著再執行
`npm start`

專案便會開始啟動！

別急，接下來記得在 Html 中引入
```
<link rel="stylesheet" href="./css/basic.css">
```
```
<script src="./js/jquery.min.js"></script>
<script src="./js/vital-ui-kit.js"></script>
```

# Browser Support

為了網頁技術的推進，以及為使用者帶來更好的體驗，瀏覽器支援度我們會專注在最新版的主流瀏覽器上。

| [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/edge.png" alt="IE / Edge" width="16px" height="16px" />](http://godban.github.io/browsers-support-badges/)</br>IE / Edge | [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/firefox.png" alt="Firefox" width="16px" height="16px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/chrome.png" alt="Chrome" width="16px" height="16px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/safari.png" alt="Safari" width="16px" height="16px" />](http://godban.github.io/browsers-support-badges/)</br>Safari | [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/opera.png" alt="Opera" width="16px" height="16px" />](http://godban.github.io/browsers-support-badges/)</br>Opera |
| :---------: | :---------: | :---------: | :---------:| :---------: |
| IE9, IE10, IE11, Edge|  ✓ |  ✓ |  ✓ |  ✓ 

# Copyright and License
[MIT License](https://github.com/GSS-FED/Vital-UI-Kit/blob/master/LICENSE)

