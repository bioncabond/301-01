import React from 'react';
import HornedBeasts from './HornedBeast';

import CardGroup from 'react-bootstrap/CardGroup'

class main extends React.Component {
   
  render() { 
  

   let beastArr  = this.props.data.map((beast, idx) => {
    
      return <HornedBeasts 
      key={idx} 
      image_url={beast.image_url} 
      title={beast.title}
      description={beast.description} 
      keyword={beast.keyword} 
      horns={beast.horns}
      toggleModal={this.props.toggleModal}
      />
       })

    // let beastArr = []; 

    // data.forEach((beast, idx) => {
    // beastArr.push(
    //   <HornedBeasts key={idx} image_url={beast.image_url} title={beast.title} description={beast.description} keyword={beast.keyword} horns={beast.horns}/>
    //   )
    // })
  
  
  return (
      <> 
      <CardGroup>
      {beastArr}
      </CardGroup>
       </>
    )
 
} 

}
export default main;