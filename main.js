left_wrist = 0;
right_wrist = 0;
difference = 0;
function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);
    video.position(175, 120)
    canvas = createCanvas(550, 550);
    canvas.position(650, 120);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}
function draw() {
    background('grey');
    textSize(difference);
    fill('pink');
    text('Hello', 200, 400)
}
function modelLoaded() {
    console.log("poseNet is initialized");
}
function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        left_wrist = results[0].pose.leftWrist.x;
        right_wrist = results[0].pose.rightWrist.x;
        difference = floor(left_wrist - right_wrist);
        console.log(left_wrist, right_wrist, difference)
        document.getElementById("result").innerHTML = "Font size = " + difference;
    }
}