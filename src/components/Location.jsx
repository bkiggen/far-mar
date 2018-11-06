import React from 'react';
import PropTypes from 'prop-types';


function Location(props) {
  return(
    <div className='location-entry'>
      <style jsx>{`
          .location-entry {
              border-radius: 20px;
              padding: 10px;
              margin: 1%;
              width: 200px;
          }
          .carrotImageStyle {
              width: 20px;
        }

      `}</style>
      <h3>{props.day}</h3>
      <h4><img className='carrotImageStyle' src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Emoji_u1f955.svg/128px-Emoji_u1f955.svg.png'></img>{props.location}</h4>
      <h4><img className='carrotImageStyle' src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Emoji_u1f955.svg/128px-Emoji_u1f955.svg.png'></img>{props.hours}</h4>
      <h4><img className='carrotImageStyle' src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Emoji_u1f955.svg/128px-Emoji_u1f955.svg.png'></img>{props.booth}</h4>
    </div>
  );
}

Location.propTypes = {
  day: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  hours: PropTypes.string.isRequired,
  booth: PropTypes.string.isRequired
};

export default Location;
