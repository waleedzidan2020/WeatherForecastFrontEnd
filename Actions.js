var audio = document.getElementById('music');
var isPlaying = true;

function togglePlay() {
  if (isPlaying) {
    audio.pause();
  } else {
    audio.play();
  }
  isPlaying = !isPlaying;
}