import React from 'react'; 
import Modal from 'react-bootstrap/Modal'
import Image from 'react-bootstrap/Image'

import  "./App.css"

class selectedBeast extends React.Component {
  
    render() {
      console.log('selectedBeast Props:',this.props);

        return(
<div>
<Modal show={this.props.showModal} onHide={this.props.handleClose}
      > 
          <Modal.Header closeButton>
            <Modal.Title>YO BEAST!</Modal.Title>
          </Modal.Header>
          <Modal.Body> 

               <Image src={this.props.selectedBeast.image_url} style = {{width: '7rem'}}> </Image>
               {/* alt={this.props.description}  */}
               {/* <p>{this.props.description}</p> */}
          </Modal.Body>
         <Modal.Footer>
            
        </Modal.Footer> 
</Modal>       
</div> 
       )}

        }
export default selectedBeast; 