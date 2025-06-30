const { app, BrowserWindow,  } = require('electron/main')
const dayjs = require("dayjs");

const createWindow = () => {
	const win = new BrowserWindow({
		width: 800,
		height: 600
	})

	win.loadFile('index.html')
}

app.whenReady().then(() => {
	createWindow()

	app.on('activate', () => {
		if (BrowserWindow.getAllWindows().length === 0) {
			createWindow()
			dayjs('2010-01-01')
		}
	})
})

app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') {
		app.quit()
	}
})