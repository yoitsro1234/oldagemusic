song1 = "Undertale OST 100 - Megalovania.mp3";
song2 = "Minecraft UST- Tall (End Music Disc Concept).mp3";
leftWristY = 0;
leftWristX = 0;
rightWristY = 0;
rightWristX = 0;
scoreRightWrist = 0;
song1IP = "";
song2IP = "";

function setup(){
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw(){
    image(video, 0, 0, 600, 500); 

    
    song1IP = song1.isPlaying();

    if(scoreLeftWrist > 0.2){
        circle(leftWristX, leftWristY, 20);
        song2.stop();
        if(song1 = false){
            song1.play();
            document.getElementById("playing").innerHTML=song1;
        }
    }

    song2IP = song2.isPlaying();

    if(scoreRightWrist > 0.2){
        circle(rightWristX, rightWristY, 20);
        song1.stop();
        if(song2 = false){
            song2.play();
            document.getElementById("playing").innerHTML=song2;
        }
    }
}

function preload(){

}

function modelLoaded(){
    console.log("MODEL LOADED LETS GOOOOOOOOOOOO");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        scoreRightWrist = results[0].pose.keypoints[10].score;
        scoreLeftWrist = results[0].pose.keypoints[9].score;

        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("Left wrist X = "+leftWristX+", Left wrist Y = "+leftWristY);

        rightWristY = results[0].pose.rightWrist.y;
        rightWristX = results[0].pose.rightWrist.x;
        console.log("Right wrist X = "+rightWristX+", Right wrist Y = "+rightWristY);
    }
}

