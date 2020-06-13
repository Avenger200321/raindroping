var red=[];
var green=[];
var blue=[];



function setup(){
    var canvas = createCanvas(400,400);
    
}

function draw(){
    background("black");
    for(var i =0;i<1000;i++){
        red.push(new RedRaindrops());
    }
    for(var i =0;i<1000;i++){
        green.push(new GreenRaindrops());
    }
    for(var i =0;i<1000;i++){
        blue.push(new BlueRaindrops());
    }
    for(var i =0;i<1000;i++){
        red[i].display();
        red[i].update();
    }
    for(var i =0;i<1000;i++){
        blue[i].display();
        blue[i].update();
    }
    for(var i =0;i<1000;i++){
        green[i].display();
        green[i].update();
    }
}



