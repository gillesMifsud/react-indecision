import React from 'react';

export default class AddOption extends React.Component {

    state = {
        error: undefined
    };

    handleAddOption = (e) => {
        e.preventDefault();

        const option = e.target.elements.option.value.trim(); // Deletes the unnecessary spaces

        const error = this.props.handleAddOption(option);

        this.setState(() => ({ error })); // shorthand for error: error

        if (!error) {
            e.target.elements.option.value = ''; // If no error, empty the input
        }
    }

    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <label htmlFor="name">Add option</label>
                    <input type="text" name="option" id="name"
                            placeholder="Add option here"/>
                    <button className="button" type="submit">Add</button>
                </form>
            </div>
        );
    }
}