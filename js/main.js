let menu = document.querySelector('.menu-icon')
let navbar = document.querySelector('.navbar')
let content = document.querySelector('#content')
let body = document.querySelector('#body')
let nav = document.querySelector('.main-header')
let leftOrientation = document.querySelector('.left-orientation')
let rightOrientation = document.querySelector('.right-orientation')

let prevScrollpos = window.scrollY;

window.addEventListener('resize', function() {
    if (window.innerWidth > 768 && navbar.classList.contains('open-menu')) {
        navbar.classList.remove('open-menu')
        content.classList.remove('active-blur')
        body.style.overflow = 'visible'
        menu.classList.toggle('move')
    }

    if (window.innerWidth <= 768) {
        leftOrientation.style.display = 'none'
        rightOrientation.style.display = 'none'
    } else {
        leftOrientation.style.display = 'inline'
        rightOrientation.style.display = 'inline'
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

window.onscroll = () => {
    let currentScrollPos = window.scrollY;

    if (prevScrollpos > currentScrollPos) {
        nav.style.top = "0";
    } else {
        nav.style.top = "-50px";
    }

    prevScrollpos = currentScrollPos;
}