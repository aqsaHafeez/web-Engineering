const myP1 = document.getElementById("p1")
//alert(myP1.innerText)
myP1.style.color = "red"
myP1.innerText="I am over the moon"

const btn = document.getElementById("btn")
btn.innerText="I am alert"

function sayHi(){
    alert("Hey there i am alert")
}
btn.onclick = sayHi