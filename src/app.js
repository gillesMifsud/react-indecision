class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            options : props.options // Indecision.defaultProps.options
        }
    }

    handleDeleteOptions() {
        this.setState(() => {
            return {
                options: []
            }
        });
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

        this.setState((prevState) => {
            return {
                options: prevState.options.concat(option)
            }
        });
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
            <ol>
                {
                    props.options.map((option) => <Option key={option} optionText={option}/>)
                }
            </ol>
        </div>

    );
};

const Option = (props) => {
    return <li>{props.optionText}</li>;
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

        this.setState(() => {
            return {
                error // shorthand for error: error
            }
        })
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
