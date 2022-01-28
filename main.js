function setup() {
canvas=createCanvas(280,280);
canvas.centre();
background("white");
canvas.mouseReleased(classifyCanvas);
synth=window.speechSynthesis;
}

function preload() {
classifier=ml5.imageClassifier('DoddleNet');
}

function clearCanvas() {
background("white");
}

function draw() {
strokeWeight(13);
stroke(0);

if (mouseIsPressed){
line(pmouseX,pmouseY,mouseX,mouseY);
}
}

function classifyCanvas() {
classifier.classify(canvas,gotResult);
}

function gotResult(error,results) {
if (error) {
console.error(error);
}
console.log(results);
document.getElementsById('label').innerHTMl='Label :  '+results[0].label;
document.getElementsById('confidence').innerHTMl='Confidence :  '+Math.round(results[0].cofidence *100)+'%';
utterThis=new SpeechSynthesisUtterance(results[0].label);
synth.speak(utterThis);
}