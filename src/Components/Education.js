import React, { Component } from 'react';

class Education extends Component {
    constructor(props) {
        super(props);
    };

    render() {
        return (
            <fieldset>
                <legend>Education</legend>
                    <label>School:
                        <input name="school" type="text" id="schoolInput" className="education" value={this.props.value} onChange={this.props.handleChange}/>
                    </label>
                    <br></br>
                    <label>Degree:
                        <input name="degree" type="text" id="degreeInput" className="education" value={this.props.value} onChange={this.props.handleChange}/>
                    </label>
                    <br></br>
                    <label>Major:
                        <input name="major" type="text" id="majorInput" className="education" value={this.props.value} onChange={this.props.handleChange}/>
                    </label>
                    <br></br>
                    <label>Date of Graduation:
                        <input name="graduation" type="date" id="graduationInput" className="education" value={this.props.value} onChange={this.props.handleChange}/>
                    </label>
                    <button onClick={this.props.addEdEntry}>Add</button>

            </fieldset> 
        );
    };
}

export default Education;