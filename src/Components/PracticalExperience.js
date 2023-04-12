import React from 'react';

function PracticalExperience(props) {
        return (
            <fieldset id="practicalExperience">
                <legend>Practical Experience</legend>
                    <label>Company:
                        <input name="company" type="text" id="companyInput" className="practicalExperience" value={props.value} onChange={props.handleChange}/>
                    </label>
                    <br></br>
                    <label>Position:
                        <input name="position" type="text" id="positionInput" className="practicalExperience" value={props.value} onChange={props.handleChange}/>
                    </label>
                    <br></br>
                    <label>Description:
                        <textarea rows="10" cols="30" name="description" id="descriptionInput" className="practicalExperience" value={props.value} onChange={props.handleChange}/>
                    </label>
                    <br></br>
                    <label>Start Date:
                        <input name="startDate" type="date" id="startDateInput" className="practicalExperience" value={props.value} onChange={props.handleChange}/>
                    </label>
                    <br></br>
                    <label>End Date:
                        <input name="endDate" type="date" id="endDateInput" className="practicalExperience" value={props.value} onChange={props.handleChange}/>
                    </label>
                    <button class="addButton" onClick={props.addExperienceEntry}>Add</button>

            </fieldset>
            );
    }

export default PracticalExperience;