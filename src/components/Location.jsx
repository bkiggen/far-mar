import React from 'react';
import PropTypes from 'prop-types';


function Location(props) {
  return(
    <div className='location-entry'>
      <style jsx>{`
          .location-entry {
              background-color: pink;
              border-radius: 20px;
              padding: 10px;
              margin: 1%;
              width: 200px;
          }
      `}</style>
      <h3>{props.day}</h3>
      <h4>{props.location}</h4>
      <h4>{props.hours}</h4>
      <h4>{props.booth}</h4>
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
