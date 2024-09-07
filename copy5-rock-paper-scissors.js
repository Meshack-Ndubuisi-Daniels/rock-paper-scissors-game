let computerMove='';
  let result='';
      
      
  const scores = JSON.parse(localStorage.getItem('scores'));
      

  //function alertt() {alert(`Wins: ${scores.Wins}, Losses: ${scores.Losses}, Ties: ${scores.Ties}`)};

  function status() {document.querySelector('.js-status').innerHTML=`You Win.`}
  function stats() {document.querySelector('.js-status').innerHTML=`You lose.`}
  function stat() {document.querySelector('.js-status').innerHTML=`Tie.`}

  function scissorsRockChoice() {document.querySelector('.js-choice').innerHTML=`You picked <img class="move-icon" src="scissors-emoji.png"> the Computer picked <img class="move-icon" src="rock-emoji.png">`}
  function scissorsScissorsChoice() {document.querySelector('.js-choice').innerHTML=`You picked <img class="move-icon" src="scissors-emoji.png"> the Computer picked <img class="move-icon" src="scissors-emoji.png">`}
  function scissorsPaperChoice() {document.querySelector('.js-choice').innerHTML=`You picked <img class="move-icon" src="scissors-emoji.png"> the Computer picked <img class="move-icon" src="paper-emoji.png">`}
  function rockPaperChoice() {document.querySelector('.js-choice').innerHTML=`You picked <img class="move-icon" src="rock-emoji.png"> the Computer picked <img class="move-icon" src="paper-emoji.png">`}
  function rockRockChoice() {document.querySelector('.js-choice').innerHTML=`You picked <img class="move-icon" src="rock-emoji.png"> the Computer picked <img class="move-icon" src="rock-emoji.png">`}
  function rockScissorsChoice() {document.querySelector('.js-choice').innerHTML=`You picked <img class="move-icon" src="rock-emoji.png"> the Computer picked <img class="move-icon" src="scissors-emoji.png">`}
  function paperRockChoice() {document.querySelector('.js-choice').innerHTML=`You picked <img class="move-icon" src="paper-emoji.png"> the Computer picked <img class="move-icon" src="rock-emoji.png">`}
  function paperScissorsChoice() {document.querySelector('.js-choice').innerHTML=`You picked <img class="move-icon" src="paper-emoji.png"> the Computer picked <img class="move-icon" src="scissors-emoji.png">`}
  function paperPaperChoice() {document.querySelector('.js-choice').innerHTML=`You picked <img class="move-icon" src="paper-emoji.png"> the Computer picked <img class="move-icon" src="paper-emoji.png">`}
  

  document.querySelector('.js-score').innerHTML=`Wins: ${scores.Wins}, Losses: ${scores.Losses}, Ties: ${scores.Ties}`;
  
  function updateScoreElement() {document.querySelector('.js-score').innerHTML=`Wins: ${scores.Wins}, Losses: ${scores.Losses}, Ties: ${scores.Ties}`;}
    
