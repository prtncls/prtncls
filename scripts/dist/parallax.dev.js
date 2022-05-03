"use strict";

$("body").mousemove(function (e) {
  parallaxIt(e, ".home", -100);
});

function parallaxIt(e, target, movement) {
  var $this = $(".home");
  var relX = e.pageX - $this.offset().left;
  var relY = e.pageY - $this.offset().top;
  var tl_moveAll = gsap.timeline();
  tl_moveAll.to(target, 1, {
    x: (relX - $this.width() / 2) / $this.width() * movement,
    y: (relY - $this.height() / 2) / $this.height() * movement
  });
}