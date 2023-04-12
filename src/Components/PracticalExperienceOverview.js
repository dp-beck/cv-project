import React from 'react';

function PracticalExperienceOverview(props) {
        return (
            <ul>
                {props.practicalExperienceEntries.map((entry) => {
                    return <li key={entry.id}>
                        <b>{entry.company}</b>
                        <br></br>
                        Position: {entry.position}
                        <br></br>
                        Description: {entry.description}
                        <br></br>
                        Start Date: {entry.startDate}
                        <br></br>
                        End Date: {entry.endDate}
                        <br></br>
                        <button className = "deleteButton" id={entry.id} onClick={props.deleteExperienceEntry}>Delete</button>
                    </li>;
                })}
            </ul>
        );
    };

export default PracticalExperienceOverview;