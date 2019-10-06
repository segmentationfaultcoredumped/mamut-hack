chrome.runtime.onInstalled.addListener(function() {
  chrome.storage.sync.set({ action: 'hidden', color: '#d50000' }, function() {
    console.log('The color is green.');
  });
});

chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
  if (message.type === 'showPageAction') {
    chrome.pageAction.show(sender.tab.id);
  }
});
