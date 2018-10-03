/* ====== FADE ON SCROLL ====== */


function setAlpha(alpha) {
   $("nav").css("background-color", "rgba(255, 215, 0," + alpha +")");

} 


function calcAlpha() {
  // define value for alpha
  let alpha = 0;
  // define variable for how far user scrolls from the top of the document
  let scroll = $(document).scrollTop();
  // at what pixel the fade should start.
  const fadeStart = 100;
  // at what pixel the fade should end.
  const fadeStop = 200;
  // Distance of fade.
  const fadeLength = fadeStop - fadeStart;


   // There are three cases: betwen 0 and fadestart, fadestart and fadestop, and from fadeStop.
  if (scroll < fadeStart) {
    alpha = 0;
  } else if (scroll < fadeStop) {
    alpha = (scroll - fadeStart) / fadeLength;
  } else {
    alpha = 1;
  }

  // return the alpha value after the IF code converts the input.
  return alpha;

}

// when document scrolls - run the setAlpha function with the value from calcAlpha.
$(document).scroll(function() {
   setAlpha(calcAlpha());
});




