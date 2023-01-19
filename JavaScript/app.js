let startGameBtn = document.querySelector('.startGame')
const questionTitle = document.getElementById('card_title')
const questionAnswer = document.getElementById('card_desc')
const answerContainer = document.querySelector('.answer-container')
const answerBtn = document.querySelector('answer')
const mainImage = document.getElementById('content-img')
const imageContainer = document.getElementsByClassName('image-container')
const gameSection = document.querySelector('.main_game_section')
const contentContainer = document.querySelector('.content-container')

let globalGameState = false
//Create List of Question using an array
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
  globalGameState = true
  let currentScore = 0
  let AnswerLength = 5
  for (let i = 0; i < imageList.length; i++) {
    createCard([imageList])
  }
}
//iterate thru question once question until 5 total are answered
function createCard([questions]) {
  const currentIndex = questions[0]

  console.log(questions.answer)
  let qCard = `
    <div class="question">
    <img src="/image_locations/img[${currentIndex + 1}].jpg" alt="">
    </div>
  <div class="answer-container">
      <form action="">
          <input type="button" value="ANSWERA">
          <input type="button" value="ANSWERb">
          <input type="button" value="ANSWERc">
          <input type="button" value="">
        </form>
       </div>
      </div>`
  contentContainer.innerHTML += qCard
}

gameActive()
