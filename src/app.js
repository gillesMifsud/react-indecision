class IndecisionApp extends React.Component {
    render() {
        const title = 'Indecision';
        const subtitle = 'Choose what do do';
        const options = ['one', 'two', 'three'];
        return (
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Action />
                <Options options={options}/>
                <AddOption />
            </div>
        );
    }
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        );
    }
}

class Action extends React.Component {
    handlePick() {
        alert('TOTO')
    }
    render() {
        return (
            <div>
                <button onClick={this.handlePick} className="btn btn-primary">What should I do ?</button>
            </div>
        );
    }
}

class Options extends React.Component {
    constructor(props) {
        super(props);
        this.handleRemove = this.handleRemove.bind(this);
    }
    handleRemove() {
        console.log(this.props.options);
    }
    render() {
        return (
            <div className="col-xs-12">
                <button onClick={this.handleRemove} className="btn btn-danger">Remove all</button>
                <ol>
                    {
                        this.props.options.map((option) => <Option key={option} optionText={option}/>)
                    }
                </ol>
            </div>

        );
    }
}

class Option extends React.Component {
    render() {
        return <li>{this.props.optionText}</li>;
    }
}

class AddOption extends React.Component {
    handleAddOption(e) {
        e.preventDefault();
        const option = e.target.elements.option.value.trim(); // Deletes the unnecessary spaces

        if (option) {
            console.log(option);
        }
    }
    render() {
        return (
            <form onSubmit={this.handleAddOption}>
                <div className="form-group">
                <label htmlFor="name">Add option</label>
                <input type="text" className="form-control"
                       name="option" id="name"
                       placeholder="Add option here"/>
                </div>
                <button type="submit" className="btn btn-primary">Add</button>
            </form>
        );
    }
}

ReactDOM.render(<IndecisionApp/>, document.getElementById('app'));
