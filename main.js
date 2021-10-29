function setup()
{
canvas = createCanvas(300,300);
canvas.center();
video = createCapture(VIDEO);
video.hide();
classifier = ml5.imageClassifier('Teachable Machine' , modelLoaded);
}

function modelLoaded() {
console.log('Model Loaded!');
}



function draw() {
    image(video , 0, 0, 300, 300);
    classifier.classify(video,gotResults);
}

function gotResults (error , results) {
if (error) {
console.error();
} else 
console.log(results);
document.getElementById("result_face_name").innerHTML = results[0].label;
document.getElementById("result_face_accuracy").innerHTML = results[0].confidence.toFixed(3);
}