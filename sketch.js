function setup() {
  // cria uma tela de 400px de largura
  createCanvas(400, 400);
  background("white");
}

function draw() {
  stroke("blue")
  fill("red")
  
 if(mouseIsPressed) { 
  rect(mouseX,mouseY,20,35)
 }
} 
