class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            options : props.options // Indecision.defaultProps.options
        }
    }

    componentDidMount() {

        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);

            if (options) {
                this.setState(() => ({ options }));
            }
        } catch (e) {
            // Do nothing console.log(e);
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    }

    componentWillUnmount() {
        
    }

    handleDeleteOptions() {
        this.setState(() => ({ options: [] }));
    }

    handleDeleteOption(optionToRemove) {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !== option)
        }));
    }

    handlePick() {
        let randOption = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randOption];
        alert(option);
    }

    handleAddOption(option) {

        if (!option) {
            return 'Enter valid value to add item';
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists'
        }


        this.setState((prevState) => ({
            options: prevState.options.concat(option)
        }));
    }

    render() {

        const subtitle = 'This is the subtitle';

        return (
            <div>
                <Header subtitle={subtitle}/>
                <Action
                    handlePick={this.handlePick}
                    hasOptions={this.state.options.length > 0}
                />
                <Options 
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption}
                />
                <AddOption
                    handleAddOption={this.handleAddOption}
                />
            </div>
        );
    }
}

IndecisionApp.defaultProps = {
    options: ['option one']
};

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    );
};

Header.defaultProps = {
  title: 'Indecision'
};

const Action = (props) => {
    return (
        <div>
            <button onClick={props.handlePick}
                    disabled={!props.hasOptions}
                    className="btn btn-primary">
                What should I do ?
            </button>
        </div>
    );
};

const Options = (props) => {
    return (
        <div className="col-xs-12">
            <button onClick={props.handleDeleteOptions} className="btn btn-danger">Remove all</button>
            {props.options.length === 0 && <p>There are no options</p>}
            <ul>
                {
                    props.options.map((option) => (
                        <Option
                            key={option}
                            optionText={option}
                            handleDeleteOption={props.handleDeleteOption}
                        />
                    ))
                }
            </ul>
        </div>

    );
};

const Option = (props) => {
    return (
        <div>
            <li>
                {props.optionText}
                <button
                    className="btn btn-warning"
                    onClick={(e) => {
                        props.handleDeleteOption(props.optionText)
                    }}
                >
                    Remove
                </button>
            </li>
        </div>
    );
};


class AddOption extends React.Component {

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

ReactDOM.render(<IndecisionApp/>, document.getElementById('app'));
