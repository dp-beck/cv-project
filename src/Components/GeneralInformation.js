import React, { Component } from 'react';

class GeneralInformation extends Component {
    constructor(props) {
        super(props);
    };

    render() {
        return (
            <fieldset id="generalInformation">
                <legend>General Information</legend>
                <label>Name:
                    <input name="name" type="text" id="nameInput" className="generalInformation" value={this.props.value} onChange={this.props.handleChange}/>
                </label>
                <br></br>
                <label>Email:
                    <input name="email" type="text" id="emailInput" className="generalInformation" value={this.props.value} onChange={this.props.handleChange}/>
                </label>
                <br></br>
                <label>Phone:
                    <input name="phone" type="text" id="phoneInput" className="generalInformation" value={this.props.value} onChange={this.props.handleChange}/>
                </label>
        
            </fieldset>
        );
    };
}

export default GeneralInformation;