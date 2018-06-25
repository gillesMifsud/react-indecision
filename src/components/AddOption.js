import React from 'react';

export default class AddOption extends React.Component {

    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        }
    }

    handleAddOption(e) {
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
                    <div className="form-group">
                        <label htmlFor="name">Add option</label>
                        <input type="text" className="form-control"
                               name="option" id="name"
                               placeholder="Add option here"/>
                    </div>
                    <button type="submit" className="btn btn-primary">Add</button>
                </form>
            </div>
        );
    }
}