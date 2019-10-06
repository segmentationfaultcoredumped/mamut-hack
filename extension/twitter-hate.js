window.addEventListener('load', myMain, false);

let scrolling = false;

let action = 'mark';
let color = 'red';
/*
window.addEventListener('click', function(){
  action = chrome.storage.local.get('action', (data) => {action = data.action});
  color = chrome.storage.local.get('color', (data) => {color =  data.color});
});
*/
window.addEventListener(
  'scroll',
  function() {
    scrolling = true;
  },
  false
);

setInterval(function() {
  if (scrolling) {
    scrolling = false;
    myMain();
  }
}, 600);

function myMain(evt) {
  chrome.runtime.sendMessage({ type: 'showPageAction' });
  let jsInitChecktimer = setInterval(checkForJS_Finish, 111);

  function checkForJS_Finish() {
    if (document.querySelector('article')) {
      clearInterval(jsInitChecktimer);
      let tweets = document.getElementsByTagName('article');
      for (tweet of tweets) {
        let text = tweet.innerText
          .split('\n')
          .slice(4, -3)
          .join(' ');

        /*
        fetch('http://127.0.0.1:5000/api/v1/evaluate/' + text, {
          mode: 'no-cors',
        })
          .then(response => {
            console.log('1st response ' + response);
            console.dir(response.json());
            return response;
          })
          .then(response => {
            console.log('2nd response ' + response);
          });
        */
        //random for demo
        const prob = Math.floor(Math.random() * 11);
        if (prob == 1) {
          switch (action) {
            case 'hidden':
              tweet.classList.add('hidden-hate');
              break;
            case 'delete':
              tweet.remove();
              break;
            case 'mark':
            default:
              tweet.classList.add(color);
          }
        }
        /* TODO: Storage system does not behave properly
        chrome.storage.sync.get('action', function(data) {
          switch (data.action) {
            case 'hidden':
              tweet.classList.add('hidden-hate');
              break;
            case 'delete':
              tweet.remove();
              break;
            case 'mark':
            default:
              chrome.storage.sync.get('color', function(data) {
                tweet.classList.add(data.color);
              });
          }
        });
        */
      }
    }
  }
}
