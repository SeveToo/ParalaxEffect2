const canvas = document.querySelector('#myCanvas')
const ctx = canvas.getContext('2d')
const CANVAS_WIDTH = (canvas.width = 823)
const CANVAS_HEIGHT = (canvas.height = 800)

const Ground = document.querySelector('#Ground')
const Grass = document.querySelector('#Grass')
const HugeTree = document.querySelector('#HugeTree')
const TheTreeBehind1 = document.querySelector('#TheTreeBehind1')
const TheTreeBehind2 = document.querySelector('#TheTreeBehind2')

let x1 = 0
let x2 = CANVAS_WIDTH
let y = 200
let movSpeed = 2

class Layer {
  constructor(img, y, speed) {
    this.x = 0
    this.x2 = CANVAS_WIDTH
    this.y = y
    this.width = CANVAS_WIDTH
    this.height = 800
    this.img = img
    this.speed = speed
  }

  draw() {
    ctx.drawImage(this.img, this.x, this.y)
    ctx.drawImage(this.img, this.x2, this.y)
  }

  update() {
    if (this.x <= -this.width) this.x = 0
    else this.x -= this.speed
    if (this.x2 <= 0) this.x2 = this.width
    else this.x2 -= this.speed
  }
}

const GroundLayer = new Layer(Ground, y + 225, movSpeed)
const GrassLayer = new Layer(Grass, y + 220, movSpeed / 1.2)
const HugeTreeLayer = new Layer(HugeTree, y + 50, movSpeed / 1.5)
const TheTreeBehind1Layer = new Layer(TheTreeBehind1, y + 60, movSpeed / 1.9)
const TheTreeBehind2Layer = new Layer(TheTreeBehind2, y + 50, movSpeed / 2.3)

const gameObjects = [
  TheTreeBehind2Layer,
  TheTreeBehind1Layer,
  HugeTreeLayer,
  GrassLayer,
  GroundLayer,
]

const animate = () => {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)
  gameObjects.forEach((object) => {
    object.draw()
    object.update()
  })

  requestAnimationFrame(animate)
}

animate()
