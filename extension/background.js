chrome.runtime.onInstalled.addListener(function() {
  chrome.storage.sync.set({ 'action': 'mark', 'color': '#d50000' }, function() {
    alert('The color is green.');
  });
});

chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
  if (message.type === 'showPageAction') {
    chrome.pageAction.show(sender.tab.id);
  }
});
