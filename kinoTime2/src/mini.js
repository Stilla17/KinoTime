const menu = document.querySelector('#menu')
const exit = document.querySelector('#exit')
let toggle = false

menu.addEventListener('click', function () {
    if (toggle === true) {
        exit.classList.toggle('block')
        toggle = false
    } else {
        exit.classList.toggle('hidden')
        toggle = true
    }
})










