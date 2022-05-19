function preload(){
    song=loadSound("Tujhe Kitna Chahne Lage-Kabir Singh.mp3")
    song=loadSound("music.mp3")
}
function setup(){
    canvas=createCanvas(560,500);
    canvas.center();
    video=createCapture(VIDEO)
    video.hide();
}
function draw(){
    image(video,0,50,400,400)
}
function play(){
    song.play();
    song.setVolume(0.1);
}