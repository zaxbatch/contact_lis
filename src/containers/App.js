import React, { Component } from 'react';
import '../css/App.css';
import Contacts from '../components/Contacts';

class App extends Component {
  constructor(props){
    super(props);
      this.state = { contacts: [] };
  }

  componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then((data) => {
      this.setState({ contacts: data})
    })
    .catch(console.log)
  }

  render(){
    return (
      <Contacts contacts={this.state.contacts} />
    );
  }

 
}

export default App;
