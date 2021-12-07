import React, {useState} from 'react';
import './Navbar.scss';
import { Link } from 'react-scroll';

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);  

  return (
    <>
      <nav className="navbar" id='navbar'>
        <div className="navbar-container container">
          <Link
            className='navbar-logo'
            onClick={closeMobileMenu}
            to='hero__section'
            smooth={true}
          >
            <img src={process.env.PUBLIC_URL + '/images/logo.png'} alt="Logo" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
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
                offset={-100}
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
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar
