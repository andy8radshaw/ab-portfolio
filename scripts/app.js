function init() {

  // eslint-disable-next-line no-undef
  // const fullPageKey = config.FULL_PAGE_KEY
  
  // eslint-disable-next-line no-undef
  new fullpage('#fullpage', {

    // licenseKey: fullPageKey,
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