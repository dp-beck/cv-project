import React from 'react';

function Education (props) {
    return (
        <fieldset id="education">
            <legend>Education</legend>
                <label>School:
                    <input name="school" type="text" id="schoolInput" className="education" value={props.value} onChange={props.handleChange}/>
                </label>
                <br></br>
                <label>Degree:
                    <input name="degree" type="text" id="degreeInput" className="education" value={props.value} onChange={props.handleChange}/>
                </label>
                <br></br>
                <label>Major:
                    <input name="major" type="text" id="majorInput" className="education" value={props.value} onChange={props.handleChange}/>
                </label>
                <br></br>
                <label>Date of Graduation:
                    <input name="graduation" type="date" id="graduationInput" className="education" value={props.value} onChange={props.handleChange}/>
                </label>
                <button class="addButton" onClick={props.addEdEntry}>Add</button>            
        </fieldset> 
    );
}

export default Education;