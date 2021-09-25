import './App.css';
import Header from './Header.js'; 
import Footer from './Footer.js'; 
import Main from './Main.js'; 
import dataJSON from './data.json';
import React from 'react'
import Container from 'react-bootstrap/Container'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      data: dataJSON
    }
  }

  //function for if you want to show = showModal = true
  //function for if you want to hide = showModal = false

  //Toggle when used, would change for true -> false false->true
  toggleModal = () => {
    (this.state.showModal) ? this.setState({ showModal: false }) : this.setState({ showModal: true });
  }

render() {
  return (
     <>
        <Container>
        <Header/>
        <Footer/>
        </Container>
        <Main toggleModal={this.toggleModal}
        data={this.state.data}/> 
       

    </>
  );
}
}
export default App;
