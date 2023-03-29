import React, { Component } from 'react';
import SaveButton from './SaveButton';
// import EditButton from './EditButton';

class InputField extends Component {
    constructor(props) {
        super(props);
    };

    render() {
        return (
            <div>
                <form>
                    <label htmlFor={this.props.tile}>{this.props.tile}</label>
                    <input type="text" id={this.props.title}/>
                    <SaveButton />
                    {/*<EditButton />*/}
                </form>
            </div>
        );
    }
}

export default InputField;