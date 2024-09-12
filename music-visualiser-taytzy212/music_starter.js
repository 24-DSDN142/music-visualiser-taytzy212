let pink = 0;
let blue = 100;
// vocal, drum, bass, and other are volumes ranging from 0 to 100

let img;
let img2;
let img3;
let img4;

let firstRun = true; 
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  
  if(firstRun){
    img = loadImage("layer1.png.png")
    img2 = loadImage("layer2.png")
    img3 = loadImage("layer3.png")
    img4 = loadImage("layer4.png")//images used in this project
    
    firstRun = false
  }
  colorMode(HSB,100);
  background(255);
  textFont('Verdana'); // please use CSS safe fonts
  rectMode(CENTER)
  textSize(24);
 
  
  push()
   scale(0.07)
   image(img,0,0);
   pop()//the night background

  push()
   scale(0.1)
   image(img2,0,-100);
   pop()//bubble clouds

  
   
   let mmd= map(drum,1.5,6,1.5,2.5);
   fill(94,45,100,100);
   ellipse(72,154,mmd,mmd);
   ellipse(362,225,mmd-0.5,mmd-0.5);
   ellipse(476,137,mmd-0.5,mmd-0.5);//drum volume

   let mmb= map(bass,1.5,6,1.5,2.5);
   fill(80,45,100,45);
   ellipse(15,130,mmb-0.7,mmb-0.6);
   ellipse(165,235,mmb,mmb);
   ellipse(315,180,mmb,mmb);//bass volume
   
   strokeWeight(5);

  let bassMap=map(other,70,100,30,90);
  let lol=15; //length
  let ls=25;//start of line
  let le=ls+lol;//end of line 
 stroke(other,90,90,60)

  for (let i =1; i<=bassMap; i=i+1){
  let lp = i *6;//movement of grouped lines "sparkling rain"


  stroke(other,60,70,60)
  push()
  translate(390,-30);
  rotate(50)
  line(ls,lp,le,lp);
  pop()//"sparkling rain"

  stroke(other,50,90,60)
  push()
  translate(200,-30);
  rotate(50)
  line(ls,lp,le,lp);
  pop()//"sparkling rain"

  stroke(other,90,90,60)
  push()
  translate(490,35);
  rotate(50)
  line(ls,lp,le,lp);
  pop()//"sparkling rain"

  }
 
   

   


 let mmm= map(vocal,0.5,-10,0,1);
 noStroke()
 fill(10,85,100,45);
 ellipse(50,45,mmm,mmm);
 fill(10,85,100,20);
 ellipse(50,45,mmm-10,mmm-10);//minori(meteor 1)

 let mam= map(vocal,0.5,-8,0,1.6);
 noStroke()
 fill(94,85,100,45);
 ellipse(123,86,mam,mam);
 fill(94,85,100,20);
 ellipse(123,86,mam-10,mam-10);//airi(meteor 2)

 let msm= map(vocal,0.5,-10,0,1.3);
 noStroke()
 fill(50,85,100,45);
 ellipse(132,30,msm,msm);
 fill(50,85,100,20);
 ellipse(132,30,msm-10,msm-10);//shizuku(meteor 3)
 
 let mhm= map(vocal,0.6,-8,0.1,1.6);
 noStroke()
 fill(60,85,100,45);
 ellipse(235,75,mhm,mhm);
 fill(60,85,100,20);
 ellipse(235,75,mhm-10,mhm-10);//haruka(meteor 4)
 


 push()
  scale(0.1)
  image(img3,0,0);
  pop();//the four meteor


 push()
  scale(0.1)
  image(img4,0,-80);
  pop()//miku,main character




 }

