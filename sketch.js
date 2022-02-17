let j;
let k;
let l;
let m;
let n;
function setup() {
  // put setup code here
  createCanvas(400,200)
  y = 100;
  j = 0;
  k = 0;
  l = 0;
  m = 0;
  n = 0;
  
}

function draw() {
  // put drawing code here
  background(7,247,223);
  line(200,0,200,200);
  
  var y = 100 + 30 * Math.sin(PI/10*j)
  j += 1

  //Gambar kanan  
  //Kepala
  fill(255,255,255)
  ellipse(300,50,20,30);
  fill(255,255,255)
  ellipse(300,50,10,20);
  point(298,48)
  point(301,48)
  
  //Badan
  //bagian bawah
  rect(286, 105, 30, 50, radians(500), radians(500))
  //bagian atas
  rect(281,65, 40, 50, radians(500), radians(500))
  
  
  //Gambar kiri
  //Kepala
  
  var y = 50 + 10 * Math.sin(PI*l/30)
  l += 1
  fill(255,255,255)
  ellipse(100,y,20,30);
  fill(255,255,255)
  ellipse(100,y,10,20);
  point(98,y)
  point(101,y)
  
  //Badan
  //Bagian bawah
  var y = 105 + 10 * Math.sin(PI*m/30)
  m += 1
  rect(86, y, 30, 50, radians(500), radians(500))
  //Bagian atas
  var y = 65 + 10 * Math.sin(PI*n/30)
  n += 1
  rect(81,y, 40, 50, radians(500), radians(500))
  
  }