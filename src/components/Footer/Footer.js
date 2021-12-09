import React from 'react';
import './Footer.scss';

function Footer() {
  function currentYear() {
    var today = new Date();
    return today.getFullYear() ;
  };

  return (
    <footer id='footer'>
      <div className="container">
        <span>Copyright © {currentYear()} | guilhermehammes.com.br</span>
        <span>Desenvolvido por guilhermehammes</span>
      </div>
    </footer>
  )
}

export default Footer
