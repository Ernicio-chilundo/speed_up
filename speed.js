var canvas = document.getElementById("my_canvas")

var context = canvas.getContext("2d")

context.lineWidth = 10
context.fillRect(50 , 50 , 100 ,100)

context.strokeStyle = "#aaa"
context.strokeRect(50, 50 , 100 , 100)
