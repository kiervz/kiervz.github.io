import React, { useEffect, useState } from 'react'
import useWindowDimensions from '../hooks/useWindowDimensions';
import './Navbar.css'

const Navbar = () => {
    const { width } = useWindowDimensions();
    const [isOpenMenu, setIsOpenMenu] = useState(false)

    const checkWidth = () => {
        if (width > 768 && isOpenMenu) {
            setIsOpenMenu(false)
            document.querySelector('#content').classList.remove('active-blur')
        }
    }

    const clickMenu = () => {
        setIsOpenMenu(!isOpenMenu)
        
        if (!isOpenMenu) {
            document.body.classList.add('body-overflow')
            document.querySelector('#content').classList.add('active-blur')
        } else {
            document.body.classList.remove('body-overflow')
            document.querySelector('#content').classList.remove('active-blur')
        }
    }

    useEffect(() => {
        checkWidth()
    }, [width])

    return (
        <header className="main-header shadow">
            <nav className="nav container">
                <a href="/" className="logo">Kiervey</a>

                <ul className={`navbar ${isOpenMenu ? 'open-menu' : 'close-menu'}`}>
                    <li><a href="#about" className='nav-link'>About</a></li>
                    <li><a href="#work" className='nav-link'>Work</a></li>
                    <li><a href="#skill" className='nav-link'>Skills</a></li>
                    <li><a href="#contact" className='nav-link'>Contact</a></li>
                </ul>

                <div className={`menu-icon ${isOpenMenu ? 'move' : ''}`} onClick={clickMenu}>
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar