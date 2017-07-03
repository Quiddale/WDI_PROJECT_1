$(init);

function init() {

  $('.columns').height($(window).height());

  $(document).ready(function(){
    $('.leftFloat.columns').on('click', function() {
      $('.object').animate({left: '50px'}, 1000);
    });
  });

  $(document).keydown(function(e){
    // up key
    if (e.keyCode === 38){
      //do something
      $('.box').animate({
        bottom: '308px'
      });
    } else if (e.keyCode === 39) {
      //do something
      $('.box').animate({
        left: '308px'
      });
    }
  });
}
