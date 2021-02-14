const square = document.querySelectorAll('.square')
const mole = document.querySelectorAll('.mole')
const timeLeft = document.querySelector('#time-left')
let score = document.querySelector('#score')

let result = 0
let currentTime = timeLeft.textContent
var X = 1000

function randomSquare() {
    if (currentTime === 0) {
        clearInterval(timerId)
    }
    if (currentTime === 35) {
        clearInterval(timerId)
        X = 600
        moveMole()
    }
    if (currentTime === 30) {
        clearInterval(timerId)
        X = 500
        moveMole()
    }
    if (currentTime === 25) {
        clearInterval(timerId)
        X = 450
        moveMole()
    }
    if (currentTime === 20) {
        clearInterval(timerId)
        X = 400
        moveMole()
    }
    if (currentTime === 15) {
        clearInterval(timerId)
        X = 350
        moveMole()
    }
    if (currentTime === 10) {
        clearInterval(timerId)
        X = 300
        moveMole()
    }
    if (currentTime === 5) {
        clearInterval(timerId)
        X = 200
        moveMole()
    }






    square.forEach(className => {
        className.classList.remove('mole')
    })

    let randomPosition = square[Math.floor(Math.random() * 9)]
    randomPosition.classList.add('mole')

    hitposition = randomPosition.id
}

square.forEach(id => {
    id.addEventListener('click', () => {
        if (id.id === hitposition && currentTime != 0) {
            result = result + 1;
            score.textContent = result
        } else if (currentTime === 0) {
            alert('reload this page to play again')
        }
    })
})
var timerId = null

function moveMole() {

    timerId = setInterval(randomSquare, X)

}

moveMole()

function countDown() {
    currentTime--
    timeLeft.textContent = currentTime

    if (currentTime === 0) {
        clearInterval(time)
        alert('GAME OVER! your final score is ' + result)

    }
}

let time = setInterval(countDown, 1000)
