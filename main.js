x_nose=0
y_nose=0
function preload(){
  clownnose=loadImage("clown_nose.png")
}
function setup(){
    canvas=createCanvas(400,400);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(400,400)
    video.hide()
    posenet_model=ml5.poseNet(video,modelLoaded)
    posenet_model.on('pose',gotResults)
}
function modelLoaded(){
    console.log("model has been loaded")
}
function gotResults(r){
   if (r.length>0){
        console.log(r)
        x_nose=r[0].pose.nose.x-14;
        y_nose=r[0].pose.nose.y-20;
        console.log(x_nose)
        console.log(y_nose)
   }
}

function draw(){
    image(video,0,0,400,400)
    image(clownnose,x_nose,y_nose,40,40)
}
function take_snap(){
    save("MySelfie.png")
}
