// Starts at the begining
function setup()
{
	createCanvas(windowWidth,windowHeight);
}

function drawFace()
{
    beginShape();

    // Cycle through an arange of coordinates

    endShape();
}

function robot()
{
    strokeWeight(6);

    //robots head
    fill(200);
    rect(100, 100, 300, 300, 20);


    //robots antenna
    fill(250, 250, 0);
    ellipse(250, 70, 60, 60);

    fill(200, 0, 200);
    rect(210, 80, 80, 30);

    //robots eyes
    fill(255);
    ellipse(175, 200, 80, 80);
    point(175, 200);
    ellipse(325, 200, 80, 80);
    point(325, 200);


    //robots nose
    fill(255, 0, 0);
    triangle(250, 220, 200, 300, 300, 300);

    //robots ears
    rect(80, 180, 30, 100);
    rect(390, 180, 30, 100);

    //robots mouth
    noFill();
    beginShape();
    vertex(175, 340);
    vertex(200, 370);
    vertex(225, 340);
    vertex(250, 370);
    vertex(275, 340);
    vertex(300, 370);
    vertex(325, 340);
    endShape();
}


// Excuted each frame
function draw()
{
    robot();

    strokeWeight(3);

    // 3D
    
    fill(238, 40, 130);

    beginShape();
    
    vertex(( 1215 - 250), 500);
    vertex(( 1215 - 250), 740);

    vertex(1010- 250, 520);
    vertex(1010- 250, 290);

    vertex(1215- 250, 500);

    vertex(1465- 250, 480);
    vertex(1240- 250, 270);

    vertex(1010- 250, 290);

    endShape();

    beginShape();

    vertex(1215- 250, 740);
    vertex(1465- 250, 720);

    vertex(1465- 250, 480);
    
    endShape();
}
