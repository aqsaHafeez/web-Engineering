// const counter = document.getElementById('counter');
// const plus = document.getElementById('plus');
// const minus = document.getElementById('minus');

// let c = 0;
// function update() {
//   counter.textContent = c;
// }
// function increment() {
//   c++;
//   update();
// }
// function decrement() {
//   c--;
//   update();
// }
// plus.addEventListener('click', increment);
// minus.addEventListener('click', decrement);



const counter = document.getElementById('counter')
const plus = document.getElementById('plus')
const minus = document.getElementById('minus')

let count = localStorage.getItem('count') 
counter.textContent = count

function update() {
  counter.textContent = count
  localStorage.setItem('count', count)
}
function increment() {
  count++
  update()
}
function decrement() {
  count--
  update()
}
plus.addEventListener('click', increment)
minus.addEventListener('click', decrement)

