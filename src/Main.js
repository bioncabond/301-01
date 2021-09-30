import React from 'react';
import HornedBeasts from './HornedBeast';
import CardGroup from 'react-bootstrap/CardGroup'


class main extends React.Component {
   
 render() { 
    return (
         <>
         <CardGroup> 
               {this.props.beastsData.map((beast, idx) => {
            return <HornedBeasts 
            key={idx} 
            beast = {beast}
            image_url={beast.image_url} 
            title={beast.title}
            description={beast.description} 
            keyword={beast.keyword} 
            horns={beast.horns}
            displayAsModal={this.props.displayAsModal}
            />
            })} 
       </CardGroup>
      </>
       )
    }
}


export default main;