
function moveUp() {
    let img = document.getElementById("tank")
    let top = parseInt(img.style.top)
    console.log(top);
    img.style.top = (top - 10) + "px"
}

function moveDown() {
    let img = document.getElementById("tank")
    let top = parseInt(img.style.top)
    console.log(top);
    img.style.top = (top + 10) + "px"
}

function moveLeft() {
    let img = document.getElementById("tank")
    let left = parseInt(img.style.left)
    console.log(left);
    img.style.left = (left - 10) + "px"
}

function moveRight() {
    let img = document.getElementById("tank")
    let left = parseInt(img.style.left)
    console.log(left);
    img.style.left = (left + 10) + "px"
}