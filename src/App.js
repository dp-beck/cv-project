import React, { Component } from 'react';
import uniqid from 'uniqid';
import GeneralInformation from './Components/GeneralInformation';
import Education from './Components/Education';
import EducationOverview from './Components/EducationOverview';

class App extends Component {
  constructor() {
    super();

    this.state = {
        name: '',
        email: '',
        phone: '',
        educationEntry: {
          id: uniqid(),
          school: '',
          degree: '',
          major: '',
          graduation: ''
        },
        educationEntries: [],
      };
    
      this.handleChange = this.handleChange.bind(this);
      this.addEdEntry = this.addEdEntry.bind(this);
  }
  
  handleChange = (e) => {
    const name = e.target.name;
    if (e.target.className === "generalInformation") {
      this.setState({
        [name]: e.target.value,
      });
    };
    if (e.target.className === "education") {
      this.setState({
        educationEntry: { 
          school: document.getElementById("schoolInput").value,
          degree: document.getElementById("degreeInput").value,
          major: document.getElementById("majorInput").value,
          graduation: document.getElementById("graduationInput").value,
          id: this.state.educationEntry.id,
        },
      });
    };
  }

  addEdEntry () {
    this.setState({
      educationEntries: this.state.educationEntries.concat(this.state.educationEntry),
      educationEntry: {
        school: '',
        degree: '',
        major: '',
        graduation: '',
        id: uniqid(),
      },
    });
    document.getElementById("schoolInput").value = '';
    document.getElementById("degreeInput").value = '';
    document.getElementById("majorInput").value = '';
    document.getElementById("graduationInput").value = '';
  }

  deleteEdEntry = (e) => {
    this.setState({
      educationEntries: this.state.educationEntries.filter(entry => entry.id !== e.target.id)
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
          <Education name={this.state.name} handleChange={this.handleChange} addEdEntry={this.addEdEntry}/>
          <EducationOverview educationEntries={this.state.educationEntries} deleteEdEntry={this.deleteEdEntry} />
        </form>
        {/*
        
        <PracticalExperience />
    <SubmitButton />*/}
      </div>
    )
  }
}

export default App;