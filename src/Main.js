import React from 'react';
import HornedBeasts from './HornedBeast';

class main extends React.Component {
  render() {
     
    return (
      <>
      <HornedBeasts title = 'bigfoot' img='test' description = 'stinky mythical land-walker' />
      <HornedBeasts title = 'cracken' img='test' description = 'horned swimming creature' />
      </>
    )
  }
}

export default main;