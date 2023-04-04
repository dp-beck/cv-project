import React, { Component } from 'react';

class CVView extends Component {
    constructor(props) {
        super(props)
    };

    render () {
        return (
            <div>
                <div id="generalInformation">
                    <h1>{this.props.name}</h1>
                    <p>{this.props.phone}</p>
                    <p>{this.props.email}</p>
                </div>
                <div id="education">
                    <h1>Education</h1>
                    <ul>
                    {this.props.educationEntries.map((entry) => {
                        return <li key={entry.id}>
                            {entry.school}
                            <br></br>
                            {entry.degree}
                            <br></br>
                            {entry.major}
                            <br></br>
                            {entry.graduation}
                            <br></br>
                            </li>;
                        })}
                    </ul> 
                </div>
                <div id="practicalExperience">
                    <h1>Practical Experience</h1>
                    <ul>
                    {this.props.practicalExperienceEntries.map((entry) => {
                        return <li key={entry.id}>
                            {entry.company}
                            <br></br>
                            {entry.position}
                            <br></br>
                            {entry.description}
                            <br></br>
                            {entry.startDate}
                            <br></br>
                            {entry.endDate}
                            <br></br>
                            </li>;
                        })}
                    </ul>
                </div>
                <button onClick={this.props.editCV}>Edit</button>
            </div>
        );
    };
}

export default CVView;