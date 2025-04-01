function playSound() {
    var audioPlayer = document.getElementById("audioPlayer");
    audioPlayer.src = "nicesthudyinterlude.wav"; // Change "uploaded_sound.mp3" to the path of the uploaded sound file on your server
    audioPlayer.play();
}
