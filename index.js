const { app, BrowserWindow, Notification, ipcMain } = require('electron');

let win
function createWindow() {
  win = new BrowserWindow({
    width: 300,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    }
  })
  // 加载index.html 文件
  win.loadFile('index.html')
  win.webContents.openDevTools();

  win.on('closed', () => {
    win = null
  })
  handleIPC()

}

// 部分API 在ready 时间触发后才能使用
app.on('ready', createWindow)

app.on('window-all-closed', () => {
  // mac os ，除非用户用cmd+q 确定退出
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (win == null) {
    createWindow()
  }
})


function handleIPC() {
  ipcMain.handle('work-notification', async () => {
    let res = await new Promise((resolve, reject) => {
      let notification = new Notification({
        title: '任务结果',
        body: '是否开始休息',
        actions: [{ text: '开始工作', type: 'button' }],
        closeButtonText: '继续工作'
      })
      notification.show()
      notification.on('action', () => {
        resolve('work')
      })
      notification.on('close', () => {
        console.log(2)
        resolve('work')
      })


    })
    return res
  })
}

