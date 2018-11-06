import React from 'react';

function Navbar(){
  return(
    <div className='navBarStyle'>
      <ul className='navListStyle'>
        <li>Products</li>
        <li>News</li>
        <li>About Us</li>
        <li>Contact</li>
      </ul>
      <style jsx>{`
          .navListStyle {
            list-style: none;
            display: flex;
            justify-content: space-around;
            width: 80%;


          }
          .navBarStyle {
            display: flex;
            width: 100%;
            align-items: center;

          }

              `}</style>
    </div>
  );
}

export default Navbar;
