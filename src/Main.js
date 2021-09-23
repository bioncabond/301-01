import React from 'react';
import HornedBeasts from './HornedBeast';
import data from './data.json'; 



class main extends React.Component {
  
 
  render() { 

    let beastArr = []; 

    data.forEach((beast, idx) => {
    beastArr.push(
      <HornedBeasts key={idx} image_url={beast.image_url} title={beast.title} description={beast.description} keyword={beast.keyword} horns={beast.horns}/>
      )
    })
  
  
  return (
      <> 
      
      {beastArr};
       </>
    )
 
} 

}
export default main;