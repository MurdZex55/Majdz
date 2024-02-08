

function toggleEffects() {
  // Element identification
  const mainboxElement = document.getElementById('mainbox');
  const myVideoElement = document.getElementById('myVideo');
  const circleElement = document.getElementById('clickmecircle');
  
  // blur and shadow for text
  mainboxElement.classList.remove('blurry');
  mainboxElement.classList.add('shadow');

  //  blur for vid
  myVideoElement.classList.add('blurry');

  // Change circle
  circleElement.style.width = '40vw';
  circleElement.style.height = '80vh';
  circleElement.style.borderRadius = '20%';
  setTimeout(function(){ circleElement.style.opacity = '0%';}, 950);
 
}
const audio = document.querySelector('audio');
var muteiconElement = document.getElementById('muteicon');

audio.pause();
var mutebuttonElement = document.getElementById('mutebutton');
var mainboxElement = document.getElementById('mainbox');
document.getElementById('clickmecircle').addEventListener( 'click', function(){
       // play audio
        setTimeout(function(){audio.play();},500);
         // Effects
         toggleEffects();
          // Show text div
        setTimeout(function() {mainboxElement.style.display = 'flex';}, 500);
        setTimeout(function() {mainboxElement.style.opacity = '90%';}, 700);
        setTimeout(function() {mutebuttonElement.style.display = 'flex';}, 500);
        setTimeout(function() {muteiconElement.style.opacity = '90%';}, 700);
      
        });

document.querySelector('audio').volume = 0.25;
        // audio mute/unmute
document.getElementById('mutebutton').addEventListener('click',function(){
  audio.muted = !audio.muted;

  if( audio.muted){
  muteiconElement.src='pngwing.com.png';
}
else {
  muteiconElement.src='hiclipart.com.png';
}

})

