let menu = document.querySelector('.menu-icon')
let navbar = document.querySelector('.navbar')
let content = document.querySelector('#content')
let body = document.querySelector('#body')

window.addEventListener('resize', function() {
    if (window.innerWidth > 768 && navbar.classList.contains('open-menu')) {
        navbar.classList.remove('open-menu')
        content.classList.remove('active-blur')
        body.style.overflow = 'visible'
        menu.classList.toggle('move')
    }
});

menu.onclick = () => {
    if (!navbar.classList.contains('open-menu')) {
        navbar.classList.add('open-menu')
        navbar.classList.remove('close-menu')
        content.classList.add('active-blur')
        body.style.overflow = 'hidden'
    } else {
        navbar.classList.add('close-menu')
        navbar.classList.remove('open-menu')
        content.classList.remove('active-blur')
        body.style.overflow = 'visible'
    }
    menu.classList.toggle('move')
}
