console.log('Hello from the background-script!')

//  Shortcut: Reload Extension
chrome.commands.onCommand.addListener(shortcut => {
    if (shortcut.includes('+Q')) {
        console.log('Reloading...')
        chrome.runtime.reload()
    }
})