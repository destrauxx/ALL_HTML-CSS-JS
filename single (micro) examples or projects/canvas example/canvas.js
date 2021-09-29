let canvas = document.querySelector('#canvas')
let ctx = canvas.getContext('2d')
let x = 0
let y = 0

// for (let i = 0; i <= 18; i++) {
//     ctx.beginPath()
//         ctx.moveTo(x, 0)
//         ctx.lineTo(x, 400)
//         x += 50
//         ctx.stroke();
// }
// for (let i = 0; i <= 18; i++) {
//     ctx.beginPath()
//         ctx.moveTo(0, y)
//         ctx.lineTo(400, y)
//         y += 50
//         ctx.stroke();
// }


// for (let i = 0; i <= 18; i++) {
//     ctx.fillRect(x, y, 50, 50)
//     y += 100
//     ctx.fillRect(x, y, 50, 50)
//     ctx.fillRect(x, y, 50, 50)
//     y -= 100
//     x += 100
//     ctx.fillRect(x, y, 50, 50)
// }


ctx.fillRect(0, 0, 400, 400)

for (let i = 0; i < 50; i++) {
    if (i == 0) {
        clean(0, 0)
    }
     clean(x += 50, y += 50)
     if (i >= 6) {
         clean(x -= 350, y -= 250)
         clll()
         clll()
     }
}

function clean(x, y) {
    ctx.clearRect(y, x, 50, 50)
    ctx.clearRect(x, y, 50, 50)
}

function clll() {
    clean(x += 50, y += 50)
    clean(x += 50, y += 50)
}
function cll() {
    clean(x -= 50, y -= 50)
    clean(x -= 50, y -= 50)
}

