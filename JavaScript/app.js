const nextQuestion = document.querySelector('.next')
const btn = document.querySelector('.btn')
const gameImage = document.getElementById('image')
const startCount = 0
const mainGameContainer = document.querySelector('.gameContainer')
const imageContainer = document.querySelector('#imageContainer')

let questionIndex = document.querySelector('.questionIndex')
let globalGameState = false
let maxQuestionIndex = 5
let currentCount = 0

const imageList = [
  {
    img: '/image_locations/img[0].jpg',
    answer: 'Desert',
  },
  {
    img: '/image_locations/img[1].jpg',
    answer: 'goron mines',
  },

  {
    img: '/image_locations/img[2].png',
    answer: 'kokiri forest',
  },
]

//Select questions and answers and display on browser

currentQuestionIndex = 0
maxQuestionIndex = 5
currentImageIndex = 0
currentCount = 1
const game = document.getElementById('game') //game div
const landing = document.getElementById('landing') //landing div
const gameStart = document.getElementById('startgame') //landing -- start game btn
let gameActive = false

game.style.display = 'none'
landing.style.display = 'block'

gameStart.addEventListener('click', () => {
  console.log('game start clicked')
  gameActive = !gameActive

  if (gameActive) {
    game.style.display = 'block'
    landing.style.display = 'flex'
  } else if (!gameActive) {
    game.style.display = 'none'
    landing.style.display = 'block'
  }
})

function handle(e) {
  if (e.keyCode === 13) {
    e.preventDefault() // Ensure it is only this code that runs
    if (currentCount < 5) {
      updateImage(currentCount)
      updateCount()
    }
    console.log('Answer was submitted')
  }
  // if (e.keCode === 13) {
  //   if (currentCount < 5) {
  //     updateImage(currentCount)
  //     updateCount()
  //     console.log('enter')
  //   } else if (currentCount > 5) {
  //   }
  // }
}

function updateCount() {
  console.log(`old val: ${currentCount}`)

  questionIndex.innerHTML = `${currentCount + 1} / ${maxQuestionIndex}`
  currentCount++
  currentImageIndex++
  console.log('updating')
  console.log(`new val: ${currentCount}`)
}

function nextImage() {
  const imagesLength = imageList.length
  if (currentImageIndex < imagesLength - 1) {
    currentIndex++
    updateImage()
  }
}

function updateImage(currentCount) {
  // slide.style.backgroundImage = images[currentIndex]
  const imageElement = document.getElementById('image')
  let newSrc = `../image_locations/img[${currentCount}].jpg`

  console.log(imageElement)
  console.log(newSrc)
  imageElement.src = `../image_locations/img[${currentCount}].jpg`
}
//
