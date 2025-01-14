let click = document.querySelector("button");
let container = document.querySelector("div");
let h3 = document.querySelector("h3");

click.addEventListener('click', getRandomColor)

function getRandomColor() {
    let red = Math.floor(Math.random() * 255 + 1);
    let green = Math.floor(Math.random() * 255 + 1);
    let blue = Math.floor(Math.random() * 255 + 1);

    h3.style.color = `RGB(${red},${green},${blue})`;
    container.style.backgroundColor = `rgb(${red},${green},${blue})`;
    container.innerText = `RGB(${red},${green},${blue})`;
}