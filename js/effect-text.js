function setupSplits() {
  
var tlSplitBurrowing = gsap.timeline(), 
    SplitBurrowing = new SplitText(".titleBurrowing", {type:"words,chars"}), 
    chars = SplitBurrowing.chars; //an array of all the divs that wrap each character


tlSplitBurrowing.from(chars, {
  duration: 0.8,
  opacity:0,
  y:10,
  ease:"circ.out",
  stagger: 0.02,
scrollTrigger: {
    trigger: ".titleBurrowing",
//markers:true,
    start: "top 75%",
   end: "bottom center",
    scrub:1
  }
//,   onComplete: () => {SplitBurrowing.revert()}
}, "+=0");

// window.addEventListener('resize', function() {
  // SplitBurrowing.revert();
// });
  
};

/*
ScrollTrigger.addEventListener("scrollEnd", function() {
    SplitBurrowing.revert();
});
*/

ScrollTrigger.addEventListener("refresh", setupSplits);
//ScrollTrigger.addEventListener("scrollEnd", () => SplitBurrowing.revert());
setupSplits();


/*
// Alternate way of resizing the cluster elements since they are absolutely positioned
$(window).resize(function (){
if(window.matchMedia("(max-width: 500px)").matches){
    gsap.set(".clusterGreat", {scale: 0.2, transformOrigin: "center center"});
} else {
  gsap.set(".clusterGreat", {scale: 1, transformOrigin: "center center"});
          }
});
*/

