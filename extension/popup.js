let setHidden = document.getElementById('set-hidden').onclick = function() {
  chrome.storage.local.set({"action": "hidden"});
};

let setDelete = document.getElementById('set-delete').onclick = function() {
  chrome.storage.local.set({"action": "delete"});
};

let setMark = document.getElementById('set-mark').onclick = function() {
  chrome.storage.local.set({"action": "mark"});
};

let setGreen = document.getElementById('set-green').onclick = function(){
  chrome.storage.local.set({ color: 'green' });
};

let setYellow = document.getElementById('set-yellow').onclick = function() {
  chrome.storage.local.set({ color: 'yellow' });
};

let setRed = document.getElementById('set-red').onclick = function(){
  chrome.storage.local.set({ color: 'red' });
};