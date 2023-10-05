status_model = "";
object = [];

function preload() {
    img = loadImage("Tv.jpeg");
}

function setup() {
    canvas = createCanvas(600, 450);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd' , modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecing objects";

}

function draw() {
    if(status_model != "")
    {
for(i=0; i < objects.length; i++)
{
    percent = floor(objects[i].confidence * 100);
    text(objects[i].label + " " + percent + "%", objects[i].x, objects[i].y);
    rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
}
    }
}

function modelLoaded() {
    console.log("Model Loaded")
    objectDetector.detect(img, gotResult);

}

function gotResult(error, results) {
    if (error) {
        console.log(error);
    }
    else {
        console.log(results);
        status_model = 1;
        objects = results;
    }
}