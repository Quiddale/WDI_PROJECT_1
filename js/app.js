$(init);

let $player;
let $gameContainer;
let gameInveral;
const speed   = 3000;
const counter = 0;

function init() {
  const $startGame = $('.first');
  const $endGame   = $('.last');
  $player          = $('.player');
  $gameContainer   = $('main');

  $startGame.one('click', playGame);
  $endGame.one('click', endGame);
}// init ends

function playGame() {
  bindKeys();
  gameInveral = setInterval(pickObject, speed);
}//playGame ends

function endGame() {
  bindKeys();
  gameInveral = setInterval(pickObject, speed);
}//endGame ends

function bindKeys() {
  $(document).keydown(function(e){
    // Up arrow
    if (!this.pressed) {
      this.pressed = true;
      $player.stop();
    } else if (e.keyCode === 38){ //Up Arrow
      $player.clearQueue();
      $player.addClass('frog-jump');
      $player.animate({
        bottom: '+=200'
      }, 400, 'linear');
    } else if (e.keyCode === 39){ //Right Arrow
      $player.clearQueue();
      $player.animate({
        left: '+=200'
      }, 400, 'swing');
    } else if (e.keyCode === 37){ //Left Arrow
      $player.clearQueue();
      $player.animate({
        left: '-=200'
        // width: '+=3 0'
      }, 400, 'swing');
    } else if (e.keyCode === 40){ //Down Arrow
      $player.offset();
      console.log($player.offset());
      $player.clearQueue();
      $player.animate({
        bottom: '-=200'
      }, 400, 'swing', function() {
        $player.removeClass('frog-jump');
      });
    }
  });
}

function pickObject() {
  const number = Math.random();

  if (number >= 0.8) {
    const $star = $('<div class="star"><p>+10</p></div>');
    appendObject($star);
  } else {
    const $box = $('<div class="box"><p>Game Over</p></div>');
    appendObject($box);
  }
}//pickObject ends

function appendObject(object) {
  object.appendTo($gameContainer);
  animateObject(object);
}//appendObject ends

function animateObject(object) {
  object.animate({
    right: `${$gameContainer.width()}px`
  }, {
    duration: 2000,
    // check object collision with $player variable
    // if object has class of box and theres a collision <--- gameOver
    // if object has class of star and theres a collision <--- score++
    step: function() {
      const locationobject = this.getBoundingClientRect();
      // const locationobject = this.getBoundingClientRect();
      const locationPlayer = $player[0].getBoundingClientRect();
      // console.log(this);  crazy element info on move
      // Collision if Statemnt
      if (!(((locationPlayer.top + locationPlayer.height) < (locationobject.top)) ||
      (locationPlayer.top > (locationobject.top + locationobject.height)) ||
      ((locationPlayer.left + locationPlayer.width) < locationobject.left) ||
      (locationPlayer.left > (locationobject.left + locationobject.width)))) {
        // Collision Detected
        console.log(this);
        if (object.hasClass('box')) {
          console.log('.box p');
          $('.box p').css('display', 'block');
          // end game
        } else {
          console.log($('.star p'));
          $('.star p').css('display', 'block');
        }
        $('.box').addClass('BOX');
        $(this).css('background-color', 'pink');
        $(this).css('background-color', 'green');
        $(this).toggle('explode').stop().remove();

        console.log('hit');
      }
    },// end step function
    complete: function() {
      object.stop().remove();
    }
  });
}
