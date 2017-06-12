$(document).ready(function() {
  var lastindex = 2 ;
  $('.circle-container .animation-block').click(function(event){
    event.stopPropagation();
    debugger;
    var index = $('.animation-box  .animation-block').index($(this));
    if( lastindex != index ){
    var calparentindex = index - 3 + 1 ;
    calparentindex = calparentindex * -24;
    debugger;
    $('.animation-box').attr("style","transform:translateZ(-894px) rotateY("+calparentindex+"deg);");
    lastindex = index; 
    }
    // do sth.
  });
  var controller = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: 'onEnter'}});
  // build scenes
  //--------------------------------------------------------------------------------------landing-sec0
  new ScrollMagic.Scene({triggerElement: '.landing-sec0', duration: '200%'})
          .setTween('.landing-sec0 > div:not(.vital-logo,.vital-logo-font)', {y: '100%', ease: Linear.easeNone})
          .addTo(controller);
  $('.landing-sec0 > div').not('.vital-logo,.vital-logo-font').each(function(){
    $(this).css ( 'margin-top',$(this).height()/-2+'px');
  });
  new ScrollMagic.Scene({triggerElement: '.landing-sec0', duration: '200%'})
          .setTween('.bottom-layer  > div ', {y: '25%', ease: Linear.easeNone})
          .addTo(controller);
  $('.bottom-layer > div' ).each(function(){
    $(this).css ( 'margin-top',$(this).height()/-8+'px');
  });
  new ScrollMagic.Scene({triggerElement: '.landing-sec0', duration: '200%'})
          .setTween('.vital-logo', {y: '750%', ease: Linear.easeNone})
          .addTo(controller);
  $('.vital-logo').css ( 'margin-top',$('.vital-logo').height()/-0.267+'px');
  new ScrollMagic.Scene({triggerElement: '.landing-sec0', duration: '200%'})
          .setTween('.vital-logo-font', {y:'750%',ease: Linear.easeNone})
          .addTo(controller);
  $('.vital-logo-font').css ( 'margin-top',$('.vital-logo-font').height()/-0.267+'px');
  //new ScrollMagic.Scene({triggerElement: '.vital-calendar-part2'})
          //.setTween('.vital-calendar-part1', {y: '-200%',ease: Linear.easeNone})
          //.addTo(controller);

  //--------------------------------------------------------------------------------------sec2
  //$('.vital-calendar-part1').css ( 'margin-top',$('.vital-calendar-part1').height()/1+'px');
  //new ScrollMagic.Scene({triggerElement: '.vital-calendar-part2', duration: '200%'})
          //.setTween('.vital-calendar-part3', {y: '-100%',ease: Linear.easeNone})
          //.addTo(controller);
  //$('.vital-calendar-part3').css ( 'margin-top',$('.vital-calendar-part3').height()/2+'px');

  //--------------------------------------------------------------------------------------sec3

  new ScrollMagic.Scene({triggerElement: '.landing-sec1 h2', duration: '350'})
            .setTween(".landing-sec1 h2", 1, { scale: 1.15, opacity: 1, ease:Sine.easeInOut}) // trigger a TweenMax.to tween
            .addTo(controller);
  new ScrollMagic.Scene({triggerElement: '.landing-sec1 h2', duration: '350'})
            .setTween(".landing-sec1 p", 1, { scale: 1.05, opacity: 1, ease:Sine.easeInOut}) // trigger a TweenMax.to tween
            .addTo(controller);


  // var tween = TweenMax.to(".landing-sec2 h2", 0.5, {scale: 1.05, repeat: 75, yoyo: true});

  // // build scene and set duration to window height
  // new ScrollMagic.Scene({triggerElement: ".landing-sec2", duration: "100%"})
  //         .setTween(tween)
  //         .addTo(controller);
  //--------------------------------------------------------------------------------------sec4
    new ScrollMagic.Scene({triggerElement: ".landing-sec4 .triggerbox", duration: 350})
          // animate color and top border in relation to scroll position
          .setTween(".landing-sec4 .vital-calendar-part1", {transform: "translateZ(45px)",ease: Circ.easeOut}) // the tween durtion can be omitted and defaults to 1
          //.addIndicators() 
          .addTo(controller);    
    new ScrollMagic.Scene({triggerElement: ".landing-sec4 .triggerbox", duration: 350})
          // animate color and top border in relation to scroll position
          .setTween(".landing-sec4 .vital-calendar-part3", {transform: "translateZ(70px)",ease: Circ.easeOut}) // the tween durtion can be omitted and defaults to 1
          //.addIndicators() 
          .addTo(controller); 
    new ScrollMagic.Scene({triggerElement: ".landing-sec4 .triggerbox", duration: 350})
          // animate color and top border in relation to scroll position
          .setTween(".landing-sec4 .vital-calendar-part4", {transform: "translateZ(70px)",ease: Circ.easeOut}) // the tween durtion can be omitted and defaults to 1
          //.addIndicators() 
          .addTo(controller); 
    new ScrollMagic.Scene({triggerElement: ".landing-sec4 .triggerbox", duration: 350})
          // animate color and top border in relation to scroll position
          .setTween(".landing-sec4 .vital-calendar-part2", {transform: "rotate3d(1.6, 1, -1.5, 70deg) translateZ(-25px)",ease: Circ.easeOut,}) // the tween durtion can be omitted and defaults to 1
          //.addIndicators() 
          .addTo(controller);  
    new ScrollMagic.Scene({triggerElement: ".landing-sec4 .triggerbox", duration: 450})
          // animate color and top border in relation to scroll position
          .setTween(".landing-sec4 .vital-calendar-part5", {transform: "translateZ(50px)",ease: Circ.easeOut}) // the tween durtion can be omitted and defaults to 1
          //.addIndicators() 
          .addTo(controller);              
  //--------------------------------------------------------------------------------------sec6
    new ScrollMagic.Scene({triggerElement: ".landing-sec6 .scroll-trigger", duration: 500})
          // animate color and top border in relation to scroll position
          .setTween(".landing-sec6 .triangle2, .landing-sec6 .triangle3", {bottom: "0px"}) // the tween durtion can be omitted and defaults to 1
          //.addIndicators() 
          .addTo(controller);
    new ScrollMagic.Scene({triggerElement: ".landing-sec6 .scroll-trigger", duration: 500})
          // animate color and top border in relation to scroll position
          .setTween(".landing-sec6 .square1", {bottom: "-50vh"})
          //.addIndicators() 
          .addTo(controller);
    // new ScrollMagic.Scene({triggerElement: ".landing-sec6 .scroll-trigger", duration: 600})
    //       .setTween('.landing-sec6 .vital-reciced-card', {top: '30vh'})
    //       //.addIndicators() 
    //       .addTo(controller);
    new ScrollMagic.Scene({triggerElement: ".landing-sec6 .scroll-trigger", duration: 400})
          .setTween('.landing-sec6 .vital-reciced-card0', {top: '40vh',ease: Power4.easeOut})
          //.addIndicators() 
          .addTo(controller);
    new ScrollMagic.Scene({triggerElement: ".landing-sec6 .scroll-trigger", duration: 400})
          .setTween('.landing-sec6 .vital-reciced-card1', {top: '30vh',ease: Power1.easeIn})
          //.addIndicators() 
          .addTo(controller);
    new ScrollMagic.Scene({triggerElement: ".landing-sec6 .scroll-trigger", duration: 400})
          .setTween('.landing-sec6 .vital-reciced-card2', {top: '20vh',ease: Power3.easeInOut})
          .addIndicators() 
          .addTo(controller);
    new ScrollMagic.Scene({triggerElement: ".landing-sec6 .scroll-trigger", duration: 400})
          .setTween('.landing-sec6 .vital-reciced-card3', {top: '40vh',ease: Power2.easeOut})
          .addIndicators() 
          .addTo(controller);
    new ScrollMagic.Scene({triggerElement: ".landing-sec6 .scroll-trigger", duration: 400})
          .setTween('.landing-sec6 .vital-reciced-card4', {top: '30vh',ease: Expo.easeOut})
          //.addIndicators() 
          .addTo(controller);
    new ScrollMagic.Scene({triggerElement: ".landing-sec6 .scroll-trigger", duration: 400})
          .setTween('.landing-sec6 .vital-reciced-card5', {top: '20vh',ease: SlowMo.ease})
          //.addIndicators() 
          .addTo(controller);
  //--------------------------------------------------------------------------------------
});