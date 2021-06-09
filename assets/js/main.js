const mobileMenu = document.getElementById('mobile-menu')
const open = document.getElementById('nav-icon1')
// const close = document.getElementById('close')

open.addEventListener('click', () => {

    if (mobileMenu.style.width == "0px")
        mobileMenu.style.width = "100%"
    else
        mobileMenu.style.width = "0px"

})

// close.addEventListener('click', () => {
//     mobileMenu.style.display = "none"
// })
