import React from 'react';
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'


class HornedBeasts extends React.Component {
  
  constructor(props) {
    super(props);
    //State must be an object {}
    this.state = {
      numberClicked: 0,
      isFav: false
    }
  }
  onAdd = () => {
    //how you set state
    this.setState({ numberClicked: this.state.numberClicked + 1 });
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
       {/* <h2>{this.props.title}</h2>
        <img src={this.props.image_url} alt={this.props.keyword} title={this.props.title} onClick={this.onAdd}></img>
        <p>{this.props.description}</p>     
        <p>clicks: {this.state.numberClicked} </p>  */}
    
    <div className="m-2">
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={this.props.image_url} />
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>
              {this.props.description}
            </Card.Text>
            <p onClick={this.setFav}>❤️{this.state.numberClicked} </p>
            {/* Ternary statement is a if/else rolled into one.  evaluation ? true : false  */}
            

            <Button className="m-1" onClick={this.onAdd}>Add</Button>
            <Button variant="danger" className="m-1" onClick={this.onRemove}>Remove</Button>
          </Card.Body>
        </Card>
      </div>


     </>
    )
  }
}

export default HornedBeasts;