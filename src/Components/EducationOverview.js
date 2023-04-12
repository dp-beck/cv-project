import React from 'react';

function EducationOverview (props) {
    return (
        <ul>
            {props.educationEntries.map((entry) => {
                return <li key={entry.id}>
                    <b>{entry.school}</b>
                    <br></br>
                    Degree: {entry.degree}
                    <br></br>
                    Major: {entry.major}
                    <br></br>
                    Date of Graduation: {entry.graduation}
                    <br></br>
                    <button className="deleteButton" id={entry.id} onClick={props.deleteEdEntry}>Delete</button>
                </li>;
            })}
        </ul>
    );
};

export default EducationOverview;