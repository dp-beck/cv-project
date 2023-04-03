import React, { Component } from 'react';

class PracticalExperienceOverview extends Component {
    render() {
        return (
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
                        <button id={entry.id} onClick={this.props.deleteExperienceEntry}>Delete</button>
                    </li>;
                })}
            </ul>
        );
    };
}

export default PracticalExperienceOverview;