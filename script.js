function playSound() {
    var audioPlayer = document.getElementById("audioPlayer");
    audioPlayer.src = "HudyInterlude.m4a"; // Change "uploaded_sound.mp3" to the path of the uploaded sound file on your server
    audioPlayer.play();
}