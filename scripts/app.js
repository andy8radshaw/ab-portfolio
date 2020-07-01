function init() {

  // * FullPage.JS code --------
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



  // * Typewriter code --------
  const dataText = ['Andy Bradshaw | Software Engineer | London']

  function typeWriter(text, i, fnCallback) {
    if (i < (text.length)) {
      document.querySelector('.typewriter').innerHTML = `<span>//</span> ${text.substring(0, i + 1)} <strong aria-hidden="true"></strong>`

      setTimeout(function () {
        typeWriter(text, i + 1, fnCallback)
      }, 130)
    } else if (typeof fnCallback === 'function') {
      setTimeout(fnCallback, 700)
    }
  }

  function StartTextAnimation(i) {
    if (typeof dataText[i] === 'undefined') {
      setTimeout(function () {
        StartTextAnimation(0)
      }, 50000)
    }
    if (i < dataText.length) {
      typeWriter(dataText[i], 0, function () {
        StartTextAnimation(i + 1)
      })
    }
  }

  StartTextAnimation(0)
}

window.addEventListener('DOMContentLoaded', init)