import React, { Component } from 'react';

class EducationOverview extends Component {
    render() {
        return (
            <ul>
                {this.props.educationEntries.map((entry) => {
                    return <li key={entry.id}>
                        <b>{entry.school}</b>
                        <br></br>
                        Degree: {entry.degree}
                        <br></br>
                        Major: {entry.major}
                        <br></br>
                        Date of Graduation: {entry.graduation}
                        <br></br>
                        <button className="deleteButton" id={entry.id} onClick={this.props.deleteEdEntry}>Delete</button>
                    </li>;
                })}
            </ul>
        );
    };
}

export default EducationOverview;