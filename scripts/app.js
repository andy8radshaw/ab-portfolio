function init() {

  // eslint-disable-next-line no-undef
  new fullpage('#fullpage', {

    
    // navigation
    menu: '#myMenu',
    lockAnchors: false,
    anchors: ['home', 'about', 'portfolio', 'contact'],
    navigation: true,
    navigationPosition: 'right',
    navigationTooltips: ['Home', 'About', 'Portfolio', 'Contact'],
    showActiveTooltip: true,
    slidesNavigation: true,

    // scrolling
    dragAndMove: true,
    autoScrolling: true,
    scrollingSpeed: 1000,
    controlArrows: false,

    // Accessibility
    keyboardScrolling: true,
    animateAnchor: false
    // menu
  })




  //methods
  // eslint-disable-next-line no-undef
  fullpage_api.setAllowScrolling(true)

}

window.addEventListener('DOMContentLoaded', init)