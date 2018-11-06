import React from 'react';
import PropTypes from 'prop-types';


function Produce(props){
  return(
    <div>
      <h3>{props.month}</h3>
      <div>
        {props.selection.map((selection, index) =>
          <div>{selection}</div>
        )}
      </div>
    </div>
  );
}

Produce.propTypes = {
  month: PropTypes.string.isRequired,
  selection: PropTypes.array.isRequired
};

export default Produce;
