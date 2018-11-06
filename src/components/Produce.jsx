import React from 'react';
import PropTypes from 'prop-types';


function Produce(props){
  return(
    <div className='produce-entry'>
      <style jsx>{`
          .produce-entry {
              background-color: lightblue;
              border-radius: 20px;
              padding: 10px;
              margin: 1%;
              width: 200px;
          }
      `}</style>
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
