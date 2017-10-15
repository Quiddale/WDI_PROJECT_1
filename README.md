# Infinite Runner
Check out the live version of the app here -> file:///Users/quiddaleosullivan/Development/WDI_PROJECT_1/index.htmlUtilising HTML5, CSS3 and jQuery I designed and built a stylised, collision-based JavaScript game named "Infinite Runner". The purpose of the game is to avoid oncoming traffic whilst attempting to collect bonus points, it is designed to test a player’s reactions.

---
**Binding Arrow keys in JS**```function bindKeys() {
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

```

---
**Javascript Collision Function**

Algorithms to detect collision in 2D games depend on the type of shapes that can collide (e.g. Rectangle to Rectangle, Rectangle to Circle, Circle to Circle). Generally you will have a simple generic shape that covers the entity known as a “*hitbox*”. One of the simpler forms of collision detection is between two rectangles that are axis aligned — meaning no rotation. The algorithm works by ensuring there is no gap between any of the 4 sides of the rectangles. Any gap means a collision does not exist.

---

```
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
```
---
**Planning:**After the Friday planning session, I spent a few hours on Saturday building a basic environment with all the elements.

Set up trello board, then start to plan out what i wanted achieve and how i wanted the user to interact with the game. The first part was the plan my first sprint was to create all my different files, then start to think about the different elemets I wanted with my game. 
Then I start to code characters movement this seemed to be working okay. It was Monday when I was close to MVP. But then I ran into collisions. This was probably the part I found most interesting. Trying to understand the logic, with the aim of running a collision function between two elements. With this challenge the step function was really great learn and understand.
Then to start implementing my collision function with just two square colliding with each other. Once the collision function was working. I went back to my trello board and set a new sprint task which was the design and implent the characters ability to avoid objects. 

![alt text](https://i.imgur.com/3GvG0Fh.jpg "Collision Course Screengrab")

---
All projects and my details can be found here -> www.qosullivan.com