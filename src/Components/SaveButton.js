import react, { Component } from 'react';

// The save button is a submit button for an input field that updates the state
// in App with the inputted information. It should "turn off" the input box. The input
// box only being "turned back" on when the edit button is pushed.

class SaveButton extends Component {
    constructor(props) {
        super(props);
        };

    onSave (e) {
        e.preventDefault();
        this.setState({
           props: e.target.value 
        });
    }

    render() {
        return (
            <button type="submit" onClick={this.onSave}>
                Save
            </button>
        );
    };
}

export default SaveButton;