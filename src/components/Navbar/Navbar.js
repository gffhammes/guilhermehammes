import React, {useState} from 'react';
import './Navbar.scss';
import { Link } from 'react-scroll';

function Navbar() {
  const [click, setClick] = useState(false);
  const [scroll, setScroll] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  window.addEventListener("scroll", showMenuBackground);

  function showMenuBackground() { 
    const distanceY = window.pageYOffset || document.documentElement.scrollTop,
    shrinkOn = 50;

    distanceY > shrinkOn ? setScroll(true) : setScroll(false);
  };

  return (
    <>
      <nav className={`navbar ${scroll ? 'bg--blue' : ''}`} id='navbar'>
        <div className="navbar-container container">
          <Link
            className='navbar-logo'
            onClick={closeMobileMenu}
            to='hero__section'
            smooth={true}
          >
            <img src={process.env.PUBLIC_URL + '/images/logo-branca.png'} alt="Logo" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active shadow-5' : 'nav-menu'}>
            <li className='nav-item'>
              <Link
                activeClass='active'
                to='hero__section'
                className='nav-link'
                smooth={true}
                onClick={closeMobileMenu}
              >
                início
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                activeClass='active'
                to='about__section'
                className='nav-link'
                smooth={true}
                onClick={closeMobileMenu}
              >
                sobre-mim
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                activeClass='active'
                to='portfolio__section'
                className='nav-link'
                smooth={true}
                onClick={closeMobileMenu}
                offset={-100}
              >
                portfolio
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                activeClass='active'
                to='services__section'
                className='nav-link'
                smooth={true}
                onClick={closeMobileMenu}
                offset={-100}
              >
                serviços
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                activeClass='active'
                to='benefits__section'
                className='nav-link'
                smooth={true}
                onClick={closeMobileMenu}
              >
                vantagens
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                activeClass='active'
                to='contact__section'
                className='nav-link'
                smooth={true}
                onClick={closeMobileMenu}
              >
                contato
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar
