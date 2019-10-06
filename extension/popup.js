let setHidden = document.getElementById('set-hidden');
let setDelete = document.getElementById('set-delete');
let setMark = document.getElementById('set-mark');

let setGreen = document.getElementById('set-green');
let setYellow = document.getElementById('set-yellow');
let setRed = document.getElementById('set-red');

setHidden.onclick = chrome.storage.sync.set({ action: 'hidden' }, function() {
  console.log('Action is set to hidden');
});

setDelete.onclick = chrome.storage.sync.set({ action: 'deleted' }, function() {
  console.log('Action is set to hidden');
});

setMark = chrome.storage.sync.set({ action: 'mark' }, function() {
  console.log('Action is set to mark');
});

/*
const set_green = chrome.storage.sync.set({ color: '#64dd17' }, function() {
  console.log('Color is set to #64dd17');
});

const set_red = chrome.storage.sync.set({ color: '#d50000' }, function() {
  console.log('Color is set to #d50000');
});

const set_yellow = chrome.storage.sync.set({ color: '#ffff00' }, function() {
  console.log('Color is set to #ffff00');
});
*/
