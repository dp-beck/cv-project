import React from 'react';

function CVView (props) {
    return (
        <div>
            <div id="cvViewGeneralInformation">
                <h1 id="name">{props.name}</h1>
                <p id="phone">{props.phone}</p>
                <p id="email">{props.email}</p>
            </div>
            <div id="cvViewEducation">
                <h1 className="sectionHeader">Education</h1>
                <ul>
                {props.educationEntries.map((entry) => {
                    return <li className="cvViewEntries"key={entry.id}>
                        <b>{entry.school}</b>
                        <br></br>
                        Degree: {entry.degree}
                        <br></br>
                        Major: {entry.major}                            <br></br>
                        Date of Graduation: {entry.graduation}
                        <br></br>
                        </li>;
                    })}
                </ul> 
            </div>
            <div id="cvViewPracticalExperience">
                <h1 className="sectionHeader">Practical Experience</h1>
                <ul>
                {props.practicalExperienceEntries.map((entry) => {
                    return <li className="cvViewEntries" key={entry.id}>
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
                        </li>;
                    })}
                </ul>
            </div>
            <button id="editButton" onClick={props.editCV}>Edit</button>
        </div>
    );
};

export default CVView;