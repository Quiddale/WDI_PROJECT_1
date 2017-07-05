$(init);
function init() {

  const $char = $('.box');
  const $bomb = $('.object');

  // Get Relative Position of Const
  let locationBomb = $bomb[0].getBoundingClientRect();
  let locationChar = $char[0].getBoundingClientRect();

  //Start Game
  $('.columns').height($(window).height());
  $(document).ready(function(){
    $('.leftFloat.columns').one('click', function() {

      // Create New Box
      const newBox = $('<div>', {'class': 'object 1'});
      $('body').append(newBox);
      $('.object').clone().append('newBox');
      $bomb.animate({left: '-10%'},
      {duration: (Math.floor(Math.random() * (9000-7000+1)) + 7000),

        //Step Animate left
        step: function() {
          locationBomb = $bomb[0].getBoundingClientRect();
          locationChar = $char[0].getBoundingClientRect();

          // Collision if Statemnt
          if (!(((locationChar.top + locationChar.height) < (locationBomb.top)) ||
          (locationChar.top > (locationBomb.top + locationBomb.height)) ||
          ((locationChar.left + locationChar.width) < locationBomb.left) ||
          (locationChar.left > (locationBomb.left + locationBomb.width)))) {
            console.log('hit!');
            //Explosion
            $(this).css('background-color', 'green');
            $(this).toggle('explode').stop().remove();
            // Collision Detected!
          } else {
            // No Collision
            $(this).css('background-color', 'pink');
          }
        }
        // }
      }); //end of $bomb.animate Scope
    }); // end of column.one('click')
  });

  $(document).keydown(function(e){
    // Up arrow
    if (!this.pressed) {
        this.pressed = true;
        if (e.keyCode === 38 || e.KeyCode === 39 || e.KeyCode === 37 || e.Keycode === 40) {//pressed key[up]...
          this.jumpKey = true;
          $player.stop();
          $player.clearQueue();
          this.jump($player);
    } else if (e.keyCode === 38){
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
    } else if (e.keyCode === 40) {
      $('.box').animate({
        left: '+=308px',
        height: '50px',
        width: '500px'
      }, 400, 'easeOutQuad');
      $('.box').animate({
        left: '-=308px',
        height: '300px',
        width: '40px'
      }, 400, 'easeInQuad');
    }
  })
}
