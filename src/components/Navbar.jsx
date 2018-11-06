import React from 'react';

function Navbar(){
  return(
    <div className='navBarStyle'>
      <ul className='navListStyle'>
        <li className='navItems'>Products</li>
        <li className='navItems'>News</li>
        <li className='navItems'>About Us</li>
        <li className='navItems'>Contact</li>
      </ul>
      <style jsx>{`
          .navListStyle {
            list-style: none;
            display: flex;
            justify-content: space-around;
            width: 80%;
            height: 80px;
            align-items: center;
          }
          .navItems {
            height: 50px;
            width: 80px;
            align-items: center;
            display: flex;
            justify-content: center;
          }
          .navItems:hover{
            background-color: rgb(89, 0, 0, 0.5);
            color: white;
            cursor: pointer;
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
