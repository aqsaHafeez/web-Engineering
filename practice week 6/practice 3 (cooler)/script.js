function generateHex() {
    // Define all possible hexadecimal characters
    const characters = '0123456789ABCDEF';
    
    // Initialize an empty string to store the hexadecimal color code
    let hexColor = '#';
    
    // Generate a random hexadecimal color code with six characters
    for (let i = 0; i < 6; i++) {
        hexColor += characters[Math.floor(Math.random() * 16)]; // Pick a random character from the characters array
    }
    
    return hexColor;
}

const mybtn = document.getElementById("btn");
const gbtn = document.getElementById("random");


let divCount=0
function sayHi(){   

    //alert("Hi there i am button")
    if (divCount >= 10) {
        alert("maximum limit of 10 divs is reached.");
        return; // Exit the function if the limit is reached
    }
    const ball = document.createElement("div")
    ball.className = "ball"
    ball.style.backgroundColor = generateHex();
    const container = document.getElementById("container");
    container.appendChild(ball)
    divCount++

}
function generateRandom(){
    const arr = document.getElementsByClassName("ball");
    
    Array.from(arr).forEach((item) => {
        item.style.backgroundColor = generateHex();
    });
}


mybtn.onclick = sayHi;
gbtn.onclick = generateRandom;