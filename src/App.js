import React, { Component } from 'react';
import uniqid from 'uniqid';
import GeneralInformation from './Components/GeneralInformation';
import Education from './Components/Education';
import EducationOverview from './Components/EducationOverview';
import PracticalExperience from './Components/PracticalExperience';
import PracticalExperienceOverview from './Components/PracticalExperienceOverview';
import CVView from './Components/CVView';
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
        practicalExperienceEntry: {
          id: uniqid(),
          company: '',
          position: '',
          description: '',
          startDate: '',
          endDate: '',
        },
        practicalExperienceEntries: [],
        cvView: false,
      };
    
      this.handleChange = this.handleChange.bind(this);
      this.addEdEntry = this.addEdEntry.bind(this);
      this.deleteEdEntry = this.deleteEdEntry.bind(this);
      this.addExperienceEntry = this.addExperienceEntry.bind(this);
      this.deleteExperienceEntry = this.deleteExperienceEntry.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
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
    if (e.target.className === "practicalExperience") {
      this.setState({
        practicalExperienceEntry: {
          company: document.getElementById("companyInput").value,
          position: document.getElementById("positionInput").value,
          description: document.getElementById("descriptionInput").value,
          startDate: document.getElementById("startDateInput").value,
          endDate: document.getElementById('endDateInput').value,
          id: this.state.practicalExperienceEntry.id,
        }
      })
    }
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

  addExperienceEntry (e) {
    e.preventDefault();
    this.setState({
      practicalExperienceEntries: this.state.practicalExperienceEntries.concat(this.state.practicalExperienceEntry),
      practicalExperienceEntry: {
        company: '',
        position: '',
        description: '',
        startDate: '',
        endDate: '',
        id: uniqid(),
      },
    });
    document.getElementById("companyInput").value = '';
    document.getElementById("positionInput").value = '';
    document.getElementById("descriptionInput").value = '';
    document.getElementById("startDateInput").value = '';
    document.getElementById("endDateInput").value = '';
  }

  deleteEdEntry = (e) => {
    this.setState({
      educationEntries: this.state.educationEntries.filter(entry => entry.id !== e.target.id)
    });
  }

  deleteExperienceEntry = (e) => {
    this.setState({
      practicalExperienceEntries: this.state.practicalExperienceEntries.filter(entry => entry.id !== e.target.id)
    });
  }
  
  editCV = () => {
    this.setState({
      cvView: !this.state.cvView
    });
    document.getElementById("form").classList.remove("hidden");
    document.getElementById("title").classList.remove("hidden");
  }
  
  handleSubmit = () => {
    this.setState({
      cvView: !this.state.cvView
    });
    document.getElementById("form").className = "hidden";
    document.getElementById("title").className = "hidden";
  }

  render() {
    return (
      <div>
        <h1 id="title">CV Generator</h1>
        <div id="form">
          <GeneralInformation name={this.state.name} handleChange={this.handleChange} />
          <Education name={this.state.name} handleChange={this.handleChange} addEdEntry={this.addEdEntry}/>
          <EducationOverview educationEntries={this.state.educationEntries} deleteEdEntry={this.deleteEdEntry} />
          <PracticalExperience name={this.state.name} handleChange={this.handleChange} addExperienceEntry ={this.addExperienceEntry} />
          <PracticalExperienceOverview practicalExperienceEntries={this.state.practicalExperienceEntries} deleteExperienceEntry={this.deleteExperienceEntry} />
          <button onClick={this.handleSubmit}>Generate CV</button>
        </div>
                {this.state.cvView ? <CVView editCV = {this.editCV} name = {this.state.name} email = {this.state.email} phone = {this.state.phone} educationEntries = {this.state.educationEntries} practicalExperienceEntries = {this.state.practicalExperienceEntries} /> : null}
      </div>
    )
  }
}

export default App;