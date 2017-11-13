# Vital UI Kit

More Details: [vital UI Kit Rules](https://csid.hackpad.com/vital-Web-UI-Kit-RbsbnPCOAV1)


## Dependencies

- [Icomoon](https://icomoon.io/)


### Development

- [Fabricator](https://fbrctr.github.io/)


## Install

安裝套件

```
npm install
```


## Usage

產生使用說明網頁 (style guide)

會將**檔名前方不含底線的 sass**, js, font, image files 輸出, 並監控 + live reload

**NOTE: 若有刪除檔案並不會馬上更新, 需重新下指令才能看到改變**

```
npm start
```

## Production

產生整包 ui kit 介面設定環境檔案

會將檔名前方不含底線的 sass, js, imgage, fonts...等檔案編譯壓縮, 並輸出至 ```build```

**NOTE: 此輸出僅針對 UI Kit 的 source code, 不含 style guide**

```
npm run build
```

## File Struectur

主要開發目標(詳細說明見下方)

- ui kit scss          - src/*.scss
- ui kit js            - src/scripts/sg.js

- styleguide scss      - styleguide/assets/styles/page/_fabricator-demo.scss
- styleguide js        - styleguide/assets/scripts/sgdemo.js
- styleguide compoent html    - styleguide/materials/*.html
- styleguide pages html       - styleguide/views/*.html

- landing page scss    - styleguide/assets/styles/page/_landing-page.scss


所有資料夾

```
src/                    ui kit js, scss

static/                 img 等靜態檔案

styleguide/             styleguide js, scss, html

  assets/               各頁面 js, scss檔
  
  data/                 變數設定

  docs/                 相關文件

  materials/            各個 views 裡面的 content block (ex: components-input, components-form)
  
  views/                所有 ui kit 頁面 (ex: index, components, javascript)

```


## Project Management

- Gulp: [Gulp Config](http://git.gss.com.tw/FED/gulp-starter-kit)

參數與檔案路徑集中在 ```gulp/config.js``` 管理

若需要新增 task, 在 ```gulp/task``` 裡面新增

- Icon: [Icomoon](https://icomoon.io/)

使用 icomoon 更新 icon, 進入 <https://icomoon.io/app/> 並挑選想要的icon

進入 Generate Font 分頁, 在 Preference 勾選 Generate Sass, Less or Stylus variables 選擇 Sass

下載後的資料夾覆蓋掉 ```static/icomoon``` 內容


### Version Control

每次更版 build 前,  要記得更動 ```package.json``` 版本號碼, 並在 ```releases``` 留下每個版本 Production 的 kit

若是開發中 (developing) 版本則要在版本號碼後方加上 ```-dev```, 如: ```0.5.4-dev```


## Project Development

- Snippet: [Sublime-snippets](https://github.com/GSS-FED/Sublime-snippets)

tabTrigger / Content

```pf``` / .scss: ```.#{$prefix}-CLASS```, .html: ```{{styleguide.prefix}}-CLASS```

```st``` / .scss: ```.#{$state}--STATE```, html: ```{{styleguide.state}}-STATE```


- Fabricator: [Fabricator Style Guide](http://fbrctr.github.io/building-a-toolkit/materials.html)

變數在 ```styleguide/data/styleguide.yml``` 管理


- Sass: [GCSS Style Guide](http://gss-fed.github.io/GCSS/)

變數在 ```src/base/_variables.scss``` 管理

註解務必保持 LEVEL 1 ~ 3 段落內容上空一行下空兩行的間距:

```
// *************************************
//
//   LEVEL 1
//
// *************************************


// -------------------------------------
//   LEVEL 2
// -------------------------------------

.some-class {
  ...
}

.some-class {
  ...
}


// -------------------------------------
//   LEVEL 2
// -------------------------------------

.some-class {
  ...
}


// ----- LEVEL 3 ----- //

.some-class {
  ...
}


// ----- LEVEL 3 ----- //
.some-class {
  ...
} // LELEL 4

```


