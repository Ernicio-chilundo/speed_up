var canvas = document.getElementById("my_canvas")

var context = canvas.getContext("2d")

context.fillStyle = "#000"
context.fillRect(50 , 50 , 100 ,100)

context.save()

context.fillStyle ="#fff"
context.fillRect(200 , 50 , 100 ,100)

context.restore()

context.fillRect(350,50,100,100)

