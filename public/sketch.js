let x = 0
let target = 300

function setup () {
  createCanvas(600, 600)
}

function mousePressed () {
  target = mouseX
}

function draw () {
  x = lerp(x, target, 0.05)

  background(180, 50, 90)

  fill(0, 0, 175, 150)
  ellipse(target, 200, 64, 64)

  fill(175, 0, 255, 150)
  ellipse(x, 200, 64, 64)
}
