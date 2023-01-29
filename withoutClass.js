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

const animate = () => {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)
  if (x1 <= -CANVAS_WIDTH) x1 = 0
  else x1 -= movSpeed
  if (x2 <= 0) x2 = CANVAS_WIDTH
  else x2 -= movSpeed
  ctx.drawImage(TheTreeBehind2, x1 / 2.3, y + 50)
  ctx.drawImage(TheTreeBehind2, x2 / 2.3, y + 50)
  ctx.drawImage(TheTreeBehind1, x1 / 1.9, y + 60)
  ctx.drawImage(TheTreeBehind1, x2 / 1.9, y + 60)
  ctx.drawImage(HugeTree, x1 / 1.5, y + 50)
  ctx.drawImage(HugeTree, x2 / 1.5, y + 50)
  ctx.drawImage(Grass, x1 / 1.2, y + 220)
  ctx.drawImage(Grass, x2 / 1.2, y + 220)
  ctx.drawImage(Ground, x1, y + 225)
  ctx.drawImage(Ground, x2, y + 225)
  requestAnimationFrame(animate)
}

animate()
