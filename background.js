chrome.browserAction.onClicked.addListener(() => {
  chrome.downloads.download({
    url: 'https://google.com',
    filename: 'google',
    saveAs: true,
  })
})
