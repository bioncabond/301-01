import React from 'react'; 
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import  "./App.css"

class SelectedBeast extends React.Component {

    render() {
        return(

<Modal show={this.props.showModal} >
          <Modal.Header>
            <Modal.Title>Select YO BEAST!</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <img src={this.props.image}></img> 
         </Modal.Body>
              <p>{this.props.description}</p>
         <Modal.Footer>
            <Button variant="secondary" onClick={this.toggleModal}>
              Close
            </Button>
          </Modal.Footer> 
          <Button variant="secondary" onClick={this.toggleModal}>
              Close
            </Button>
        </Modal>       
        )}

        }
export default SelectedBeast; 