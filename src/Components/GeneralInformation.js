import React, { Component } from 'react';
import InputField from './InputField.js';

class GeneralInformation extends Component {
    constructor(props) {
        super(props);
    };

    render() {
        return (
            <fieldset>
                <legend>General Information</legend>
                <label>Name:
                    <input name="name" type="text" id="nameInput" value={this.props.value} onChange={this.props.handleChange}/>
                </label>
                <button>Save</button>
                <button>Edit</button>
                <br></br>
                <label>Email:
                    <input name="email" type="text" id="emailInput" value={this.props.value} onChange={this.props.handleChange}/>
                </label>
                <button>Save</button>
                <button>Edit</button>
                <br></br>
                <label>Phone:
                    <input name="phone" type="text" id="phoneInput" value={this.props.value} onChange={this.props.handleChange}/>
                </label>
                <button>Save</button>
                <button>Edit</button>
            
            </fieldset>
        );
    };
}

export default GeneralInformation;