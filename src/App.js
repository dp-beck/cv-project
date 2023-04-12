import React, { useState } from 'react';
import uniqid from 'uniqid';
import GeneralInformation from './Components/GeneralInformation';
import Education from './Components/Education';
import EducationOverview from './Components/EducationOverview';
import PracticalExperience from './Components/PracticalExperience';
import PracticalExperienceOverview from './Components/PracticalExperienceOverview';
import CVView from './Components/CVView';

function App () {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [educationEntry, setEducationEntry] = useState({
    id: uniqid(),
    school: '',
    degree: '',
    major: '',
    graduation: ''
  });
  const [educationEntries, setEducationEntries] = useState([]);
  const [practicalExperienceEntry, setPracticalExperienceEntry] = useState({
    id: uniqid(),
    company: '',
    position: '',
    description: '',
    startDate: '',
    endDate: '',
  });
  const [practicalExperienceEntries, setPracticalExperienceEntries] = useState([]);
  const [cvView, setCvView] = useState(false);
  
  const handleChange = (e) => {
    if (e.target.className === "generalInformation") {
      setName(document.getElementById("nameInput").value);
      setPhone(document.getElementById("phoneInput").value);
      setEmail(document.getElementById("emailInput").value);
    };

    if (e.target.className === "education") {
      setEducationEntry({ 
          school: document.getElementById("schoolInput").value,
          degree: document.getElementById("degreeInput").value,
          major: document.getElementById("majorInput").value,
          graduation: document.getElementById("graduationInput").value,
          id: educationEntry.id,
        });
    };

    if (e.target.className === "practicalExperience") {
      setPracticalExperienceEntry({
          company: document.getElementById("companyInput").value,
          position: document.getElementById("positionInput").value,
          description: document.getElementById("descriptionInput").value,
          startDate: document.getElementById("startDateInput").value,
          endDate: document.getElementById('endDateInput').value,
          id: practicalExperienceEntry.id,
        });
    };
  };

  const addEdEntry = () => {
    setEducationEntries(educationEntries.concat(educationEntry));
    setEducationEntry({
      school: '',
      degree: '',
      major: '',
      graduation: '',
      id: uniqid(),
    });
    document.getElementById("schoolInput").value = '';
    document.getElementById("degreeInput").value = '';
    document.getElementById("majorInput").value = '';
    document.getElementById("graduationInput").value = '';
  }

  const addExperienceEntry = (e) => {
    setPracticalExperienceEntries(practicalExperienceEntries.concat(practicalExperienceEntry));
    setPracticalExperienceEntry({
        company: '',
        position: '',
        description: '',
        startDate: '',
        endDate: '',
        id: uniqid(),
      });
    document.getElementById("companyInput").value = '';
    document.getElementById("positionInput").value = '';
    document.getElementById("descriptionInput").value = '';
    document.getElementById("startDateInput").value = '';
    document.getElementById("endDateInput").value = '';
  }

  const deleteEdEntry = (e) => {
    setEducationEntries(educationEntries.filter(entry => entry.id !== e.target.id));
  }

  const deleteExperienceEntry = (e) => {
    setPracticalExperienceEntries(practicalExperienceEntries.filter(entry => entry.id !== e.target.id));
  }
  
  const editCV = () => {
    setCvView(!cvView);
    document.getElementById("form").classList.remove("hidden");
    document.getElementById("title").classList.remove("hidden");
  }
  
  const handleSubmit = () => {
    setCvView(!cvView);
    document.getElementById("form").className = "hidden";
    document.getElementById("title").className = "hidden";
  }

  return (
    <div id="app">
      <header>
        <h1 id="title">CV Generator</h1>
      </header>
      <div id="form">
        <GeneralInformation name={name} handleChange={handleChange} />
        <Education name={name} handleChange={handleChange} addEdEntry={addEdEntry}/>
        <EducationOverview educationEntries={educationEntries} deleteEdEntry={deleteEdEntry} />
        <PracticalExperience name={name} handleChange={handleChange} addExperienceEntry ={addExperienceEntry} />
        <PracticalExperienceOverview practicalExperienceEntries={practicalExperienceEntries} deleteExperienceEntry={deleteExperienceEntry} />
        <button id="generateCV" onClick={handleSubmit}>Generate CV</button>
      </div>
      {cvView ? <CVView editCV = {editCV} name = {name} email = {email} phone = {phone} educationEntries = {educationEntries} practicalExperienceEntries = {practicalExperienceEntries} /> : null}
      <footer>
        Daniel Beck © 2003
      </footer>
    </div>
  )
}

export default App;