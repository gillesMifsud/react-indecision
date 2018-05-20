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
    render() {
        return (
            <div>
                <button className="btn btn-primary">What should I do ?</button>
            </div>
        );
    }
}

class Options extends React.Component {
    render() {
        return (
            <ol>
                {
                    this.props.options.map((option) => <Option key={option} optionText={option}/>)
                }
            </ol>
        );
    }
}

class Option extends React.Component {
    render() {
        return <li>{this.props.optionText}</li>;
    }
}

class AddOption extends React.Component {
    render() {
        return (
            <form>
                <label htmlFor="addOption">Add Option</label>
                <input type="text" id="addOption" placeholder="Add Option"/>
                <button>Add</button>
            </form>
        );
    }
}

ReactDOM.render(<IndecisionApp/>, document.getElementById('app'));
