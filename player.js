
var z = 0; // Start at first audio pl
$("#play-bt").click(function(){
    $(".audio-player")[z].play();
    $(".message").text("Music started");
})
$("#pause-bt").click(function(){
    $("#audio-player")[z].pause();
    $(".message").text("Music paused");
})
$("#stop-bt").click(function(){
    $(".audio-player")[z].pause();
    $(".audio-player")[z].currentTime = 0;
    $(".message").text("Music Stopped");
})
$("#next-bt").click(function(){
    $(".audio-player")[z].pause();
    z++;
    if (z >= x) z = 0;
    $(".audio-player")[z].play();
    $(".message").text("Track: "+z);
})