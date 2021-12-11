(()=>{console.log("Hello from the background-script!");chrome.commands.onCommand.addListener(o=>{o.includes("+Q")&&(console.log("Reloading..."),chrome.runtime.reload())});})();
