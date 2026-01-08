import { app, BrowserWindow } from 'electron';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function createWindow() {
	const win = new BrowserWindow({
		width: 1200,
		height: 800,
		icon: path.join(__dirname, 'icons/icon.ico'),
		minWidth: 280,  // Минимальная ширина (как вы просили)
		minHeight: 400,
		webPreferences: {
			// nodeIntegration: false, // рекомендуется для безопасности
			// contextIsolation: true,
		},
	});

	// Путь к вашей папке dist
	win.removeMenu();
	win.loadFile(path.join(__dirname, 'dist', 'index.html'));
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') app.quit();
});
