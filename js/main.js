let menu = document.querySelector('.menu-icon')
let mainHeader = document.querySelector('.main-header')
let navbar = document.querySelector('.navbar')
let navLink = document.querySelectorAll('.nav-link')
let content = document.querySelector('#content')
let body = document.querySelector('#body')
let nav = document.querySelector('.main-header')
let leftOrientation = document.querySelector('.left-orientation')
let rightOrientation = document.querySelector('.right-orientation')
let preloader = document.querySelector('#preloader')
let sections = document.querySelectorAll('section[id]')

let prevScrollpos = window.scrollY;

const checkWidth = () => {
    if (window.innerWidth <= 768) {
        leftOrientation.style.display = 'none'
        rightOrientation.style.display = 'none'
    } else {
        leftOrientation.style.display = 'inline'
        rightOrientation.style.display = 'inline'
    }
}

window.onload = () => {
    checkWidth()

    // setTimeout(() => {
    //     preloader.style.display = 'none'
    // }, 2000)
}

const navLinkAction = (e) => {
    navbar.classList.add('close-menu')
    navbar.classList.add('close-menu')
    navbar.classList.remove('open-menu')
    content.classList.remove('active-blur')
    menu.classList.remove('move')
    body.style.overflow = 'visible'
    

    navLink.forEach(n => n.classList.remove('active-link'))
    document.querySelector(`#${e.target.id}`).classList.add('active-link')
}

navLink.forEach(n => n.addEventListener('click', navLinkAction))

window.addEventListener('resize', () => {
    if (window.innerWidth > 768 && navbar.classList.contains('open-menu')) {
        navbar.classList.remove('open-menu')
        content.classList.remove('active-blur')
        body.style.overflow = 'visible'
        menu.classList.toggle('move')
    }

    checkWidth()
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

    if(currentScrollPos >= 100) mainHeader.classList.add('shadow-header'); else mainHeader.classList.remove('shadow-header')
}

const scrollActive = () => {
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('#nav-' + sectionId).classList.add('active-link')
        }else{
            document.querySelector('#nav-' + sectionId).classList.remove('active-link')
        }
    })
}

window.addEventListener('scroll', scrollActive)