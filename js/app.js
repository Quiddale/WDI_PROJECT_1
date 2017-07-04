$(init);
function init() {

  const $char = $('.box');
  const $bomb = $('.object');

  // Get Relative Position of Const
  let locationBomb = $bomb[0].getBoundingClientRect();
  let locationChar = $char[0].getBoundingClientRect();
  // console.log(`bomb location:`,locationBomb,`char location:`, locationChar);

  $('.columns').height($(window).height());
  $(document).ready(function(){
    //Start Game
    $('.leftFloat.columns').one('click', function() {
      // Create New Box
      const newBox = $('<div>', {'class': 'object 1'});
      $('body').append(newBox);
      $('.object').clone().append('newBox');
      //Step Function
      $bomb.animate({left: '-100%'},
        {
          duration: (Math.floor(Math.random() * (10000-7000+1)) + 7000),
          step: function(now, fx) {
            // $bomb.animate({duration: 100, step: function(now,fx) {
            // $char.animate({duration: 100, step: function(now,fx) {
            locationBomb = $bomb[0].getBoundingClientRect();
            locationChar = $char[0].getBoundingClientRect();
            // console.log(locationChar);
            // console.log(locationBomb);
            if (locationBomb.left === locationChar.left) {

              // Collision if Statemnt
              if ($char.x < $bomb.x + $bomb.w &&
                     $char.x + $char.w > $bomb.x &&
                     $char.y < $bomb.y + $bomb.h &&
                     $char.h + $char.y > $bomb.y) {
                console.log('hit!');
                // Collision Detected!
                $bomb.css('color','green', fx);
              } else {
                // No Collision
                $char.css('color','blue', fx);
              }
            }
          }
        }); //end of $bomb.animate Scope
    }); // end of column.one('click')
  });

  $(document).keydown(function(e){

  // Up arrow
  if (e.keyCode === 38){
    $('.box').animate({
      bottom: '+=800px',
      height: '20px',
      width: '50px'
    }, 400, 'easeOutQuad');
    $('.box').animate({
      bottom: '-=800px',
      height: '300px',
      width: '100px'
    }, 400, 'easeInQuad');

    //right arrow
  } else if (e.keyCode === 39) {
    $('.box').animate({
      left: '+=308px',
      height: '20px',
      width: '200'
    }, 400, 'easeOutQuad');
    $('.box').animate({
      left: '-=308px',
      height: '20px',
      width: '100px'
    }, 400, 'easeInQuad');

    // left arrow
  } else if (e.keyCode === 37) {
    $('.box').animate({
      left: '+=308px',
      height: '300px',
      width: '500px'
    }, 400, 'easeOutQuad');
    $('.box').animate({
      left: '-=308px',
      height: '200px',
      width: '80px'
    }, 400, 'easeInQuad');
  }
  });
}
