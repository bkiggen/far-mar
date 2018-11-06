import React from 'react';
import PropTypes from 'prop-types';

function ProduceDisplay(props){
  return(
    <ul>
      {props.selection.map((selection, index) =>
        <li>{selection}</li>
      )}
    </ul>
  );
}

ProduceDisplay.propTypes = {
  selection: PropTypes.array.isRequired
};

export default ProduceDisplay;
