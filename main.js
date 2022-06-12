leftWirstX = 0;
leftWirstY = 0;
rightWirstY = 0;
rightWirstX = 0;
scoreLeftWrist = 0;
function preload() {
    song = loadSound("song1.mp3")
    song = loadSound("music.mp3")
}
function setup() {
    canvas = createCanvas(560, 500);
    canvas.center();
    video = createCapture(VIDEO)
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded)
    poseNet.on("poses", gotposes)

}
function draw() {
    image(video, 0, 50, 400, 400)
}
function play() {
    song.play();
    song.setVolume(1);

}
function modelLoaded() {
    console.log("PoseNet is Intilized")
}
function gotposes(results) {
    if (results.length > 0) {
        console.log("results")
        scoreLeftWrist = results[0].pose.keypoints[9].score
        console.log("scoreLeftWrist = " + scoreLeftWrist)
        leftWirstX = results[0].pose.leftWrist.x;
        leftWirstY = results[0].pose.leftWrist.y;
        console.log("leftWirstX = " + leftWirstX + "leftWristY" + leftWirstY)
        scoreRightWrist = results[0].pose.keypoints[10].score
        console.log("scoreRightWrist = " + scoreRightWrist)
        rightWirstX = results[0].pose.rightWrist.x;
        rightWirstY = results[0].pose.rightWrist.y;
        console.log("rightWirstX = " + rightWirstX + "rightWristY" + rightWirstY)
    }
}

function draw() {
    image(video, 0, 0, 400, 400)
    fill("red")
    stroke("red")
    if (scoreLeftWrist > 0.2) {
        song.play("music.mp3")
    }
    else if (scoreRightWrist > 0.2) {
        song.play("song1.mp3")
    }
}


