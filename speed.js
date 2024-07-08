var canvas = document.getElementById("my_canvas")

var context = canvas.getContext("2d")

// context.fillStyle = "#000"
// context.fillRect(50 , 50 , 100 ,100)

// context.save()

// context.fillStyle ="#fff"
// context.fillRect(200 , 50 , 100 ,100)

// context.restore()

// context.fillRect(350,50,100,100)

context.beginPath()
context.moveTo(75,250)
context.lineTo(150,50)
context.lineTo(225,250)
context.lineTo(50,120)
context.lineTo(250,120)
context.lineTo(75,250)

context.lineWidth = 2
context.strokeStyle ="yellow"
context.stroke()

// circunferencias e arcos 
context.beginPath()
context.arc(300,56,40,0, 2*Math.PI)
context.fill()
context.stroke()

context.beginPath()
context.arc(50,50,40, 90*Math.PI / 180 , 270*Math.PI/ 180 , false)
context.fill()
context.stroke()

context.beginPath()
context.arc(80,50,40 ,90*Math.PI /180 , 270*Math.PI /180 , true)
context.fill()
context.stroke()