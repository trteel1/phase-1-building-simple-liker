// Your JavaScript code goes here!

const emptyHeart = document.querySelectorAll('span')


emptyHeart.forEach(element => {

  element.addEventListener('click', ()=>{

    changeHearts()
    mimicServerCall().catch(function(error){

      document.getElementById('modal').className = "visible"
      changeHearts()

      setTimeout(function(){ 
        document.getElementById('modal').className = "hidden"
      }, 3000);


    })


  });

  function changeHearts(){
    if (element.className === "like-glyph"){

      element.innerHTML = FULL_HEART
      element.className = "like-glyph activated-heart"

    } else if (element.className === "like-glyph activated-heart") {
      element.innerHTML = EMPTY_HEART
      element.className = "like-glyph"
    }

}




})



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------
function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}