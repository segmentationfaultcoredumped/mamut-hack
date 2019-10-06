/*let posts = document.getElementsByClassName("scrollerItem");
console.log(posts);*/


window.addEventListener ("load", myMain, false);

let scrolling = false;
let dict = new Object(); 
 
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
    if ( document.querySelector (".scrollerItem")) {
        clearInterval (jsInitChecktimer);

        let posts = document.getElementsByClassName("scrollerItem");
        for (post of posts){
          let innerPost = post.getElementsByClassName("_eYtD2XCVieq6emjKBH3m");
          if (innerPost[0]){
              if(!(innerPost[0].textContent in dict)){
                  fetch('https://127.0.0.1:80/api/v1/evaluate/'+innerPost[0].textContent, {
                    mode: 'no-cors',
                   })
                   .then(response=>{
                        console.log(response);
                        return response;
                    }).then( response => {
                        console.log(response);
                    }); 
                  dict[innerPost[0].textContent] = '';
              }
          }
          // try .remove on element
          //add if for testing if hate speach or not
          //post.classList.add('hidden-hate');
        }
    }      
  }    
}

/*document.addEventListener('click', function(){
            
    let innerPost = document.getElementsByClassName("uI_hDmU5GSiudtABRz_37");

    let title = innerPost[0].getElementsByClassName("_2SdHzo12ISmrC8H86TgSCp _29WrubtjAcKqzJSPdQqQ4h ");
    //Comprovar estat en diccionari
    title[0].classList.add('hidden-hate');

    let innerComments=innerPost[0].getElementsByClassName("_1YCqQVO-9r-Up6QPB9H6_4 _1YCqQVO-9r-Up6QPB9H6_4");

    let comments=innerComments[0].getElementsByClassName("_292iotee39Lmt0MkQZ2hPV");

    for (comment of comments){
      if(comment.textContent){
        if(!(comment.textContent in dict)){
          //Pasar al backend
          console.log(comment.textContent);
          dict[comment.textContent] = '';
        }
      }
      //Comprovar estat en diccionari
      comment.classList.add('hidden-hate');
    }

});*/











