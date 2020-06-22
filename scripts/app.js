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
    slidesNavigation: false,

    // scrolling
    autoScrolling: true,
    scrollingSpeed: 700,
    controlArrows: false,
    touchSensitivity: 10,

    // Accessibility
    keyboardScrolling: true,
    animateAnchor: false
    // menu
  })

  //methods
  // eslint-disable-next-line no-undef
  fullpage_api.setAllowScrolling(true)

  console.log('hello there')

}

window.addEventListener('DOMContentLoaded', init)