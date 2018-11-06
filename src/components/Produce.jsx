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
          .scrollDiv{
            height: 180px;
            width: 200px;
            overflow-Y: scroll;
          }
          .scrollDiv::-webkit-scrollbar-track {
            padding: 2px 0;
            background-color: lightblue;
          }

          .scrollDiv::-webkit-scrollbar {
            width: 10px;
          }

          .scrollDiv::-webkit-scrollbar-thumb {
            border-radius: 20px;
            background-color: grey;
          }

      `}</style>
      <h3>{props.month}</h3>
      <div className="hideDiv">
        <div className="scrollDiv">
          <ul>
          {props.selection.map((selection, index) =>
            <li>{selection}</li>
          )}
          </ul>
        </div>
      </div>
    </div>
  );
}

Produce.propTypes = {
  month: PropTypes.string.isRequired,
  selection: PropTypes.array.isRequired
};

export default Produce;
// .hideDiv{
//   height: 160px;
//   width: 180px;
//   overflow: hidden;
// }
