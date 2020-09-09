// ==UserScript==
// @name        CVSClipper
// @description Clip coupons from the CVS website
// @match       https://www.cvs.com/extracare/home*
// ==/UserScript==

(() => {
  function clipAllCoupons () {
    console.warn(this)
    this.disabled = true
    this.textContent = 'Clipping...'
    for (const i of document.getElementsByTagName('app-all-coupons')[0].getElementsByClassName('action-items red')) {
      i.click()
    }
    this.textContent = 'Done!'
    setInterval(() => { document.getElementsByTagName('body')[0].removeChild(this) }, 1000)
  }

  const button = document.createElement('BUTTON')
  button.style.position = 'fixed'
  button.style.top = '0'
  button.style.right = '0'
  button.style.width = '100px'
  button.style.height = '50px'
  button.style.border = '3px solid #000'
  button.style.borderRadius = '25px'
  button.style.backgroundColor = '#080'
  button.style.zIndex = '99'
  button.textContent = 'Clip all coupons'
  button.addEventListener('click', clipAllCoupons)
  document.getElementsByTagName('body')[0].appendChild(button)
})()
