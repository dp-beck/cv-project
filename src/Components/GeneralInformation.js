import React from 'react';

function GeneralInformation (props) {
    return (  
        <fieldset id="generalInformation">
            <legend>General Information</legend>
            <label>Name:
                <input name="name" type="text" id="nameInput" className="generalInformation" value={props.value} onChange={props.handleChange}/>
            </label>
            <br></br>
            <label>Email:
                <input name="email" type="text" id="emailInput" className="generalInformation" value={props.value} onChange={props.handleChange}/>
            </label>
            <br></br>
            <label>Phone:
                <input name="phone" type="text" id="phoneInput" className="generalInformation" value={props.value} onChange={props.handleChange}/>
            </label>
        </fieldset>
    );
};

export default GeneralInformation;