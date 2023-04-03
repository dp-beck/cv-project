import React, { Component } from 'react';

class EducationOverview extends Component {
    render() {
        return (
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
                        <button id={entry.id} onClick={this.props.deleteEdEntry}>Delete</button>
                    </li>;
                })}
            </ul>
        );
    };
}

export default EducationOverview;