$(init);
function init() {

  const $char = $('.box');
  // const $bomb = $('.object');


  // Get Relative Position of Const
  // let locationBomb = $bomb[0].getBoundingClientRect();
  let locationChar = $char[0].getBoundingClientRect();

  //Start Game
  $('.columns').height($(window).height());

  let interval;

  $('.leftFloat.columns').on('click', function() {

    // Create New Box
    // Call Function
    // Set Interval
    interval = setInterval(launchBox, 1000);

    // function yell() {
    //   console.log("hello");
    // }


  }); // end of column.one('click')

  $('.rightFloat.columns').on('click', function() {
    clearInterval(interval);
  });

  let newBox;
  let newstar;
  let locationNewBox;

  function launchBox() {
    newBox = $('<div>', {'class': 'object'});
    $('body').append(newBox);
    newBox.animate({left: '-10%'},
      {duration: (Math.floor(Math.random() * (9000-7000+1)) + 7000),

      //Step Function
        step: function() {
          locationNewBox = this.getBoundingClientRect();
          locationChar = $char[0].getBoundingClientRect();
          // console.log(this);
          // Collision if Statemnt
          if (!(((locationChar.top + locationChar.height) < (locationNewBox.top)) ||
          (locationChar.top > (locationNewBox.top + locationNewBox.height)) ||
          ((locationChar.left + locationChar.width) < locationNewBox.left) ||
          (locationChar.left > (locationNewBox.left + locationNewBox.width)))) {

            // Collision Detected!
            console.log(this);
            $(this).css('background-color', 'green');
            $(this).toggle('explode').stop().remove();
            console.log('hit!');
          } else {
            // No Collision
            $(this).css('background-color', 'pink');
          }
        }
      });
    console.log('box Launched!');
  } // end of launchBox() scope

  $(document).keydown(function(e){
    // Up arrow
    if (!this.pressed) {
      this.pressed = true;
      $char.stop();
    } else if (e.keyCode === 38){//Up Arrow
      $char.clearQueue();
      $('.box').animate({
        bottom: '1100px',
        height: '300px',
        width: '50px'
      }, 400, 'swing');
    } else if (e.keyCode === 39){//Right Arrow
      $char.clearQueue();
      $('.box').animate({
        left: '2400px',
        height: '300px',
        width: '50px'
      }, 400, 'swing');
    } else if (e.keyCode === 37){//Left Arrow
      $char.clearQueue();
      $('.box').animate({
        left: '40px',
        height: '300px',
        width: '50px'
      }, 400, 'swing');
    } else if (e.keyCode === 40){//Down Arrow
      $char.offset()
      console.log($char.offset());
      $char.clearQueue();
      $('.box').animate({
        bottom: '300px',
        height: '100px',
        width: '50px'
      }, 400, 'swing');
    }
  });
}
