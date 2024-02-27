const btn = document.getElementById("btn")
//const container = document.getElementById("container")
function sayHi(){
   // alert("Hey there i am alert")
   const ball = document.createElement("div")
   ball.className ="ball"
   const container = document.getElementById("container")
   container.appendChild(ball)
    
}
btn.onclick = sayHi