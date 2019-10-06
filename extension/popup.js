const set_kv = (key, value) => {
  return () =>
    chrome.storage.sync.set({ key: value }, function() {
      console.log('Value is set to ' + value);
    });
};

const set_hidden = set_kv(action, 'hidden');
const set_delete = set_kv(action, 'delete');
const set_mark = set_kv(action, 'mark');

const set_green = set_kv(color, '#64dd17');
const set_red = set_kv(color, '#d50000');
const set_yellow = set_kv(color, '#ffff00');

