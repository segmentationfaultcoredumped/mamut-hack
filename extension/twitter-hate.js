window.addEventListener('load', myMain, false);

let dict = new Object();
let scrolling = false; 

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
}, 1200);

function myMain(evt) {
  chrome.runtime.sendMessage({ type: 'showPageAction' });
  let jsInitChecktimer = setInterval(checkForJS_Finish, 111);

  function checkForJS_Finish() {
    if (document.querySelector('article')) {
      clearInterval(jsInitChecktimer);
      let tweets = document.getElementsByTagName('article');
      for (tweet of tweets) {
        let innerTweet = tweet.getElementsByClassName(
          'css-901oao r-hkyrab r-1qd0xha r-a023e6 r-16dba41 r-ad9z0x r-bcqeeo r-bnwqim r-qvutc0'
        );

        if (innerTweet[0]) {
          if (!(innerTweet[0].textContent in dict)) {
            //Pasar al backend
            let result = fetch('http://127.0.0.1:5000/api/v1/evaluate/'+ innerTweet[0].textContent)
            .then(function(response) {
              return response.json();
            }).then(function(response) {
              return response.result;
            });
            dict[innerTweet[1].textContent] = result;
          }
        }
        if (innerTweet[1]) {
          if (!(innerTweet[1].textContent in dict)) {
            //Pasar al backend
            let result = fetch('http://127.0.0.1:5000/api/v1/evaluate/'+ innerTweet[1].textContent)
            .then(function(response) {
              return response.json();
            }).then(function(response) {
              return response.result;
            });
            dict[innerTweet[1].textContent] = result;
          }
        }

        chrome.storage.sync.get('action', function(data) {
          switch (data) {
            case 'hidden':
              tweet.classList.add('hidden-hate');
              break;
            case 'delete':
              tweet.remove();
              break;
            case 'mark':
            default:
              chrome.storage.sync.get('color', function(data) {
                tweet.style.backgroundColor = data.color;
                tweet.setAttribute('value', data.color);
              });
          }
        });
      }
    }
  }
}
