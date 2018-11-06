import React from 'react';
import LocationList from './LocationList';
import ProduceList from './ProduceList';
import Header from './Header';


function App(){
  return (
    <div>
      <Header/>
      <LocationList/>
      <ProduceList/>
    </div>
  );
}

export default App;
