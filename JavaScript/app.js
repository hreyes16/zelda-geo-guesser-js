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

function gameActive() {
  currentQuestionIndex = 0
  maxQuestionIndex = 5
  currentImageIndex = 0
  currentCount = 0

  nextQuestion.addEventListener('click', () => {
    if (currentCount <= 5) {
      updateCount()
    }
    if (!imageList) {
      alert('no image loaded')
    }
  })

  function updateCount() {
    questionIndex.innerHTML = `${currentCount + 1} / ${maxQuestionIndex}`
    currentCount++
    currentImageIndex++
  }
}

const createCard = ([{ image, answer }]) => {
  let questionCard = `<img id="image" src="/image_locations/img[${0}].jpg" alt="">
  `
  imageContainer.innerHTML += questionCard
}

function nextImage() {
  const imagesLength = imageList.length
  if (currentImageIndex < imagesLength - 1) {
    currentIndex++
    updateImage()
  }
}

function updateImage() {
  slide.style.backgroundImage = images[currentIndex]
}
createCard([{ imageList }])
//iterate thru question once question until 5 total are answered

gameActive()
