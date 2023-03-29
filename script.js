// function my() {
//     let result = Math.floor(Math.random() * 1001)
//     document.querySelector('p').innerHTML = result
// }

function RandomPositions() {
    let Hero = document.getElementById("image");
    let x = Math.floor(Math.random() * 1000);
    let y = Math.floor(Math.random() * 1000);
    Hero.style.top = y + 'px';
    Hero.style.left = x + 'px';
}