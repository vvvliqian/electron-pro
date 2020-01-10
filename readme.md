<!--
 * @Author: your name
 * @Date: 2020-01-09 10:43:59
 * @LastEditTime : 2020-01-10 15:05:57
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /electron-project/readme.md
 -->


   
###### 安装

```
npm i electron --save-dev
npm i --arch=ia32 --platform=win32 electron
npx electron -v
npx electron
```

###### 创建窗口实例

```
let win
function createWindow() {
  win = new BrowserWindow({
    width: 300,
    height: 600,
    webPreferences: {
      nodeIntegration: true,  // 启用node
    }
  })
  // 加载index.html 文件
  win.loadFile('index.html')
  // 开发者调试工具
  win.webContents.openDevTools();

  win.on('closed', () => {
    win = null
  })
 
}
```

###### html

```
<html>
  <head>
    <meta charset="UTF-8">
    <title>Hello World!</title>
    <!-- https://electronjs.org/docs/tutorial/security#csp-meta-tag -->
    <meta http-equiv="Content-Security-Policy" content="script-src 'self' 'unsafe-inline';" />
  </head>
  <body>
    <h1>Hello World!</h1>
    We are using node <script>document.write(process.versions.node)</script>,
    Chrome <script>document.write(process.versions.chrome)</script>,
    and Electron <script>document.write(process.versions.electron)</script>.
  </body>
</html>
```




  

