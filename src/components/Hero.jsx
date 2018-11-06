import React from 'react';

function Hero(){
  return(
    <div className="heroImageContainer">
      <img className="heroImage" src="https://images.unsplash.com/photo-1533167751327-4091607cecc5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=35f4715c46a0f2fbbacb0a7a55fdf266&auto=format&fit=crop&w=1350&q=80"></img>
      <div className="originalTextContainer"><h1 className="originalText">From our table to your table. <em>This</em> is original.</h1></div>

      <style jsx>{`
          .heroImageContainer, .heroImage {
            width: 100%;
            position: relative;
          }
          .originalTextContainer {
            position: absolute;
            top: 15%;
            left: 50%;
            transform: translateY(-50%);
            transform: translateX(-50%);
            background-color: rgba(128,128,128, 0.5);
            width: 600px;
            padding: 20px;
            text-align: center;
          }
          .originalText {
            color: white;
            font-size: 70px;
          }
      `}</style>
    </div>
  );
}

export default Hero;
