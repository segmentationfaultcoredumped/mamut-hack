window.addEventListener ("load", myMain, false);

let scrolling = false;
 
window.addEventListener('scroll', function() {
  scrolling = true;
}, false);
 
setInterval( function() {
  if ( scrolling ) {
    scrolling = false;
    myMain()
  }
}, 1200 );
 

function myMain (evt) {

    let jsInitChecktimer = setInterval (checkForJS_Finish, 111);

    function checkForJS_Finish () {
        if ( document.querySelector ("article")) {
            clearInterval (jsInitChecktimer);
            // DO YOUR STUFF HERE.
            let tweets = document.getElementsByTagName('article');
            for (tweet of tweets){
                // try .remove on element
                //add if for testing if hate speach or not
                tweet.classList.add('hidden-hate');
            }
        }
    }
}







