import React from 'react';

function Logo(){
  return(
    <div>
      <img className='logoStyle' src='https://cdn.dribbble.com/users/934457/screenshots/2715420/fresh-logo.png'></img>
      <style jsx>{`
          .logoStyle {
            width: 175px;
          }

              `}</style>
    </div>
  );
}

export default Logo;
