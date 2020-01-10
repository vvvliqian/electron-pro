const { ipcRenderer } = require('electron')
const Timer = require('timer.js')

function startWork() {
  let workTimer = new Timer({
    ontick: (ms) => {
      updateTime(ms)
    },
    onend: () => {
      notification()
    }
  })
  workTimer.start(3)
}

function updateTime(ms) {
  let timeContainer = document.getElementById('timer-container');
  timeContainer.innerText = ms
}
async function notification() {
  let res = await ipcRenderer.invoke('work-notification')
  if (res === 'rest') {
    setTimeout(() => {
      alert('休息')
    }, 5 * 1000)
  } else if (res === 'work') {
    startWork()
  }

}

startWork()