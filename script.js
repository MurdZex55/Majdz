

function toggleEffects() {
  // Get the element references
  var mainboxElement = document.getElementById('mainbox');
  var myVideoElement = document.getElementById('myVideo');
  var circleElement = document.getElementById('clickmecircle');

  // blur and shadow for text
  mainboxElement.classList.remove('blurry');
  mainboxElement.classList.add('shadow');

  //  blur for vid
  myVideoElement.classList.add('blurry');

  // Change circle
  circleElement.style.width = '40vw';
  circleElement.style.height = '70vh';
  circleElement.style.borderRadius = '20%';
  setTimeout(function(){ circleElement.style.opacity = '0%';}, 950);
 
}

document.getElementById('clickmecircle').addEventListener( 'click', function(){
        // Show text div

        toggleEffects();
        setTimeout(function() {document.getElementById('mainbox').style.display = 'flex';}, 500);
        setTimeout(function() {document.getElementById('mainbox').style.opacity = '90%';}, 700);
        // Effects
      
        });
       
