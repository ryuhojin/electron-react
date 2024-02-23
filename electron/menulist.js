const { app } = require('electron')
const isMac = process.platform === 'darwin';
console.log(app.name);
const menulist = [
    ...(isMac
        ? [{
            label: app.name,
            submenu: [
                { role: 'about' },
                { type: 'separator' },
                { role: 'services' },
                { type: 'separator' },
                { role: 'hide' },
                { role: 'hideOthers' },
                { role: 'unhide' },
                { type: 'separator' },
                { role: 'quit' }
            ]
        }]
        : []),
    {
        label: '메뉴',
        submenu: [
            {
                label: '로그인',
                click: async () => {

                }
            },
            isMac ? { label: '종료', role: 'close' } : { label: '종료', role: 'quit' },
        ]
    }
]

module.exports = menulist;