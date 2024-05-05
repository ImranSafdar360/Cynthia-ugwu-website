const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});
const heroAnimation = () => {
    var tl = gsap.timeline();
    tl.from("#nav", {
      y: "-100%",
      opacity: 0,
      duration: 1,
      delay: 0.5,
      ease: Expo,
    });
    tl.from("#hero-title h1", {
      y: "-100%",
      opacity: 0,
      stagger: 0.4,
      ease: Expo,
    });
    tl.from("#title-txt p", {
      y: "100%",
      opacity: 0,
      ease: Expo,
    });
    tl.from("#left-txt", {
      x: "100%",
      opacity: 0,
      ease: Expo,
      duration: 0.5,
    });
    tl.from("#hero-footer", {
      y: "100%",
      opacity: 0,
      ease: Expo,
      duration: 0.5,
    });
  };
  heroAnimation();
const mouseScale = () => {
  var xscale = 1;
  var yscale = 1;

  var xpre = 0;
  var ypre = 0;
  window.addEventListener("mousemove", function (dets) {
    xpre = dets.clientX;
    ypre = dets.clientY;
    xscale = gsap.utils.clamp(0.8, 1, 1.2, dets.clientX - xpre);
    yscale = gsap.utils.clamp(0.8, 1, 1.2, dets.clientY - ypre);
    cursorMove(xscale, yscale);
  });
};
const cursorMove = (xscale, yscale) => {
  window.addEventListener("mousemove", function (dets) {
    document.querySelector("#cursor-circle").style.transform = `translate(${
      dets.clientX - 10
    }px, ${dets.clientY - 15}px) scale(${xscale}, ${yscale})`;
  });
};
mouseScale();
cursorMove();

document.querySelectorAll(".elem")
.forEach(function(elem){
    var rotate = 0;
    var diffrot = 0;
    elem.addEventListener("mousemove",function(dets){
        var diff = dets.clientY- elem.getBoundingClientRect().top;
        diffrot = dets.clientX - rotate;
        rotate = dets.clientX;
        gsap.to(elem.querySelector("img"),{
            opacity:1,
            ease:Power3,
            top:diff,
            left:dets.clientX,
            rotate: gsap.utils.clamp(-20, 20, diffrot *0.8)
        })
    })
    elem.addEventListener("mouseleave",function(){
        gsap.to(elem.querySelector("img"),{
            opacity:0,
            ease:Power3,
        })
    })
})