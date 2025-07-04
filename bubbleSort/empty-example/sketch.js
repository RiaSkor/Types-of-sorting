var el=[];
var hvalue;
var offset = 5;
var wsize;
var tmp;
var j ;
var k ;
var cols;
var startOn = false;

function setup() {
 createCanvas(1220, 400);
 //colorMode(HSB);
 }

 function buildFunction() {
  cols=document.getElementById('cols').value;
  wsize = (width-20)/cols-offset;
  startOn = false;
  for (let i=0; i<cols; i++) {
    hvalue = getRandomInt(100, 1);
    el[i] = new Element((wsize+offset)*i+20, i*7, hvalue*4);
  }
 
 function getRandomInt(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
 }
}

function startFunction() {
  startOn = true;
  j = 0;
  k = 0;
}

function draw() {
  clear();
  background(333);
  for (let i=0; i<cols; i++) {
    el[i].display();
  }

  if (startOn) {
    if (k<cols-j-2) k++;
    else {
      k = 0;
      if (j<cols) j++;
    }
    if (el[k].h > el[k + 1].h){
      tmp = el[k].h;
      el[k].h = el[k + 1].h;
      el[k + 1].h = tmp;
    }
  }
}
