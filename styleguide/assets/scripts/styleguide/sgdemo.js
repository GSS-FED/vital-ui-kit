/**
 * @name demoControl
 * @desc for demo usage
 */
sg.demoControl = function() {

  // disable link
  $(_PREFIX + '-dropdown-menu a,' + _PREFIX + '-breadcrumb a').click(function(e) {
    e.preventDefault();
    e.stopPropagation();
  });

  // ----- collpase ----- //
  new jQueryCollapse($(_PREFIX +"-collapse"), {
    query: _PREFIX +'-collapse--title',
    open: function() {
      this.slideDown(150);
    },
    close: function() {
      this.slideUp(150);
    },
    accordion: true
  });


  // // ----- tooltip ----- //

  // // Vital ui tooltip
  // $(_PREFIX + '-tooltip').tooltipster({
  //   contentCloning: true,
  //   theme: PREFIX + '-tooltip--theme__default',
  //   interactive: true
  // });

  return this;
};


/**
 * Initialization
 */
(function() {
  sg.demoControl();
}());
