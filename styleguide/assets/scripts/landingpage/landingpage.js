$(document).ready(function() {
  var lastindex = 2;
  var controller = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: 'onEnter'}});

  // -------------------------------------
  //   landing-sec0
  // -------------------------------------

  new ScrollMagic.Scene({triggerElement: '.landing-sec0', duration: '200%'})
          .setTween('.landing-sec0 > .cards-wrapper > div:not(.vital-logo,.vital-logo-font)', {y: '100%', ease: Linear.easeNone})
          .addTo(controller);

  //這套件會自動改變本來排好的卡片位置所以要依照比例把高度推回去 
  //依照他的特性 公式是 margin-top:(duration: '200%' / y: '100%')*-1
  $('.landing-sec0 > .cards-wrapper  > div').not('.vital-logo,.vital-logo-font').each(function(){
    $(this).css ( 'margin-top',$(this).height()/-2+'px');
  });


  new ScrollMagic.Scene({triggerElement: '.landing-sec0', duration: '200%'})
          .setTween('.bottom-layer  > div ', {y: '25%', ease: Linear.easeNone})
          .addTo(controller);
  //這套件會自動改變本來排好的卡片位置所以要依照比例把高度推回去 
  //依照他的特性 公式是 margin-top:(duration: '200%' / y: '25%')*-1
  $('.bottom-layer  > div ' ).each(function(){
    $(this).css ( 'margin-top',$(this).height()/-20+'px');
  });


  new ScrollMagic.Scene({triggerElement: '.landing-sec0', duration: '200%'})
          .setTween('.vital-logo', {y: '750%', ease: Linear.easeNone})
          .addTo(controller);

  new ScrollMagic.Scene({triggerElement: '.landing-sec0', duration: '200%'})
          .setTween('.vital-logo-font', {y:'750%',ease: Linear.easeNone})
          .addTo(controller);
  //這套件會自動改變本來排好的卡片位置所以要依照比例把高度推回去 
  //依照他的特性 公式是 margin-top:(duration: '200%' / y: '750%')*-1
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
          .setTween(".landing-sec4 .vital-calendar-part2", {transform: "rotate3d(1.5, 0.9, -1.3, 70deg) translateZ(-25px)",ease: Circ.easeOut,}) // the tween durtion can be omitted and defaults to 1
          //.addIndicators()
          .addTo(controller);

    new ScrollMagic.Scene({triggerElement: ".landing-sec4 .triggerbox", duration: 450})
          // animate color and top border in relation to scroll position
          .setTween(".landing-sec4 .vital-calendar-part5", {transform: "translateZ(50px)",ease: Circ.easeOut}) // the tween durtion can be omitted and defaults to 1
          //.addIndicators()
          .addTo(controller);

  //--------------------------------------------------------------------------------------sec6

    new ScrollMagic.Scene({triggerElement: ".landing-sec6 .scroll-trigger", duration: 500, offset: -30})
          // animate color and top border in relation to scroll position
          .setTween(".landing-sec6 .triangle2, .landing-sec6 .triangle3, .landing-sec6 .rectangle", {bottom: "0"}) // the tween durtion can be omitted and defaults to 1
          //.addIndicators()
          .addTo(controller);

    // new ScrollMagic.Scene({triggerElement: ".landing-sec6 .scroll-trigger", duration: 600})
    //       .setTween('.landing-sec6 .vital-reciced-card', {top: '30vh'})
    //       //.addIndicators()
    //       .addTo(controller);

    new ScrollMagic.Scene({triggerElement: ".landing-sec6 .scroll-trigger", duration: 400})
          .setTween('.landing-sec6 .vital-reciced-card0, \
            .landing-sec6 .vital-reciced-card1, \
            .landing-sec6 .vital-reciced-card2, \
            .landing-sec6 .vital-reciced-card3, \
            .landing-sec6 .vital-reciced-card4, \
            .landing-sec6 .vital-reciced-card5', {transform: 'translateY(-120px)',ease: Power4.easeIn})
          // .addIndicators()
          .addTo(controller);

  //--------------------------------------------------------------------------------------
});
