function init() {
  // eslint-disable-next-line no-undef
  new fullpage('#fullpage', {
    licenseKey: '9FC6A3EE-F0B44DE3-95D84BC8-F67C9742',
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
    autoScrolling: true,
    scrollingSpeed: 700,
    controlArrows: false,
    touchSensitivity: 10,
    normalScrollElements: '.project-show',
    // normalScrollElements: '.jobr, .hikr, .dinder, .battleships',
    
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