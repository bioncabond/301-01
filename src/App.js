import './App.css';
import Header from './Header.js'; 
import Footer from './Footer.js'; 
import Main from './Main.js'; 
import rawData from './data.json';
import React from 'react'
import Container from 'react-bootstrap/Container'
import selectedBeast from './selectedBeast.js';
import Form from 'react-bootstrap/Form'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      selectedBeast: {},
      beastsData: rawData,
    }
  }

  displayAsModal = (name) => {
    const selectedBeast = rawData.find(beast => beast.title === name);
    this.setState({ selectedBeast, showModal: true });
  }
  handleClose = () => this.setState({ showModal: false });

  handleChange = (event) => {
      let updatedBeastarr = rawData.filter((n)  => { 
      if(event.target.value === 'all'){
        return n.horns
      } else {
        return (Number(event.target.value) === n.horns);
      }
      }
      )
      this.setState({beastsData : updatedBeastarr })
  } 

render() {
  return (
     <>
        <Container>
        <Header/>

        <Form id="myForm">
          <Form.Group controlId="hornFrom.ControlSelect">
            <Form.Control as="select" name="horns" onChange={this.handleChange}>
              <option value="all">Select Number of Horns</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="100">100</option>
            </Form.Control>
          </Form.Group>
          </Form>

        
        </Container>
        <Main 
        beastsData={this.state.beastsData}
        displayAsModal={this.displayAsModal}
       /> 
          

        <Footer/>
        <selectedBeast
          selectedBeast={this.state.selectedBeast} 
          handleClose={this.handleClose}
          showModal={this.state.showModal}
        />
       
    </>
  );
}
}
export default App;
