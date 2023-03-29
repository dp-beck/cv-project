import React, { Component } from 'react';
import GeneralInformation from './Components/GeneralInformation';
class App extends Component {
  constructor() {
    super();

    this.state = {
        name: '',
        email: '',
        phone: '',
      };
    
      this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange = (e) => {
    const name = e.target.name;
    this.setState({
      [name]: e.target.value,
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
  }

  render() {
    return (
      <div>
        <h1>CV Generator</h1>
        <form onSubmit={this.handleSubmit}>
          <GeneralInformation name={this.state.name} handleChange={this.handleChange}/>
        </form>
        {/*
        <Education />
        <PracticalExperience />
    <SubmitButton />*/}
      </div>
    )
  }
}

export default App;