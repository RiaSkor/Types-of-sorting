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
  quickSort(el, 0, el.length - 1);
}

function draw() {
  clear();
  background(333);
  for (let i = 0; i < cols; i++) {
    el[i].display();
  }
}

async function quickSort(arr, left, right) {
  if (left < right) {
    let pivotIndex = await partition(arr, left, right);
    await Promise.all([
      quickSort(arr, left, pivotIndex - 1),
      quickSort(arr, pivotIndex + 1, right)
    ]);
  }
}

async function partition(arr, left, right) {
  let pivot = arr[right].h;
  let i = left - 1;
  for (let j = left; j < right; j++) {
    if (arr[j].h < pivot) {
      i++;
      [arr[i].h, arr[j].h] = [arr[j].h, arr[i].h];
      await sleep(50); // Добавляем задержку для анимации
    }
  }
  [arr[i + 1].h, arr[right].h] = [arr[right].h, arr[i + 1].h];
  await sleep(50); // Добавляем задержку для анимации
  return i + 1;
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
 