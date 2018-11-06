import React from 'react';
import Logo from './Logo';
import Navbar from './Navbar';


function Header(){
  return(
    <div className='headerStyle'>
      <Logo/>
      <Navbar/>
      <style jsx>{`
            .headerStyle {
              display: flex;
            }
                `}</style>
    </div>
  );
}

export default Header;
