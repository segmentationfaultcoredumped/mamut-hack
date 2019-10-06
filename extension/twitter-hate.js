window.addEventListener('load', myMain, false);

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
      console.log('HOLAAAAAAA');
      for (tweet of tweets) {
        let text = tweet.innerText
          .split('\n')
          .slice(4, -3)
          .join(' ');
        console.log('Sending: ' + text);
        fetch('http://127.0.0.1:5000/api/v1/evaluate/' + text, {
          mode: 'no-cors',
        })
          .then(response => {
            console.log('1st response ' + response);
            console.dir(response);
            return response;
          })
          .then(response => {
            console.log('2nd response ' + response);
          });
        /*
        if (innerTweet[0]) {
          //Pasar al backend
          console.log('GOING TO FETCH --->>', innerTweet[0].textContent);
          let result = fetch(
            'http://127.0.0.1:5000/api/v1/evaluate/' + innerTweet[0].textContent
          )
            .then(function(response) {
              console.log(response.json());
              return response.json();
            })
            .then(function(response) {
              console.log(response.result);
              return response.result;
            });

          //dict[innerTweet[1].textContent] = result;
        }
        if (innerTweet[1]) {
          //Pasar al backend
          let result = fetch(
            'http://127.0.0.1:5000/api/v1/evaluate/' + innerTweet[1].textContent
          )
            .then(function(response) {
              return response.json();
            })
            .then(function(response) {
              return response.result;
            });
          console.log(result);
          //dict[innerTweet[1].textContent] = result;
        }
*/
        chrome.storage.sync.get('action', function(data) {
          switch (data) {
            case 'hidden':
              console.log('HIDDEN ' + data);
              tweet.classList.add('hidden-hate');
              break;
            case 'delete':
              console.log('DELETE ' + data);
              tweet.remove();
              break;
            case 'mark':
            default:
              console.log('MARK ' + data.color);
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
