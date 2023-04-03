import React, { Component } from 'react';

class PracticalExperience extends Component {
    render () {
        return (
            <fieldset>
                <legend>Practical Experience</legend>
                    <label>Company:
                        <input name="company" type="text" id="companyInput" className="practicalExperience" value={this.props.value} onChange={this.props.handleChange}/>
                    </label>
                    <br></br>
                    <label>Position:
                        <input name="position" type="text" id="positionInput" className="practicalExperience" value={this.props.value} onChange={this.props.handleChange}/>
                    </label>
                    <br></br>
                    <label>Description:
                        <textarea rows="10" cols="30" name="description" id="descriptionInput" className="practicalExperience" value={this.props.value} onChange={this.props.handleChange}/>
                    </label>
                    <br></br>
                    <label>Start Date:
                        <input name="startDate" type="date" id="startDateInput" className="practicalExperience" value={this.props.value} onChange={this.props.handleChange}/>
                    </label>
                    <br></br>
                    <label>End Date:
                        <input name="endDate" type="date" id="endDateInput" className="practicalExperience" value={this.props.value} onChange={this.props.handleChange}/>
                    </label>
                    <button onClick={this.props.addExperienceEntry}>Add</button>

            </fieldset>
            );
    }
}

export default PracticalExperience;