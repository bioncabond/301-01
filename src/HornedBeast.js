import React from 'react';
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import SelectedBeast  from './selectedBeast';

class HornedBeasts extends React.Component {
  
  constructor(props) {
    super(props);
    //State must be an object {}
    this.state = {
      numberClicked: 0,
      showModal: false
      // isFav: false
    }
  }
  onAdd = () => {
    //how you set state
     
    this.setState({ numberClicked: this.state.numberClicked + 1 })
      }
  
  
  onRemove = () => {
    if (this.state.numberClicked > 0) {
      this.setState({ numberClicked: this.state.numberClicked - 1 });
    }
  }
  setFav = () => {
    if (this.state.isFav) {
      this.setState({ isFav: false })
    }
    else {
      this.setState({ isFav: true })
    }
  }
   
  render() {
    return(
     <>
        
    <div className="m-2">
      {this.state.showModal ? <SelectedBeast showModal={this.state.showModal} image={this.props.image_url}/> : '' }
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={this.props.beast.image_url} onClick={() => this.props.displayAsModal(this.props.beast.title)} />
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>
              {this.props.description}
            </Card.Text>
            <p onClick={this.setFav}>❤️{this.state.numberClicked} </p>
            <Button className="m-1" onClick={this.onAdd}>Add</Button>
            <Button variant="danger" className="m-1" onClick={this.onRemove} > Remove
            </Button>
          </Card.Body>
        </Card>
      </div>
     </>
    )
  }
}

export default HornedBeasts;