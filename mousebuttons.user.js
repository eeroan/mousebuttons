// ==UserScript==
// @name           mousebuttons
// @description    use all mouse buttons
// @include        *
// @version        1.0
// ==/UserScript==
document.addEventListener('mousedown', e => {
  const button = e.buttons
  // 8 == back, 16 = forward
  if (button === 8 || button === 16) {
    e.preventDefault()
    if (button === 8) {
      history.back()
    } else {
      history.forward()
    }
  }
})
