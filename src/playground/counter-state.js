class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleRemoveOne = this.handleRemoveOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count: 0
        }
    }
    handleAddOne () {
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            };
        });
    }
    handleRemoveOne () {
        this.setState((prevState) => {
            return {
                count: prevState.count - 1
            };
        });
    }
    handleReset () {
        this.setState(() => {
            return {
                count: 0
            };
        });
    }
    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <div className="btn-list">
                    <button onClick={this.handleAddOne} className="btn btn-primary">+ 1</button>
                    <button onClick={this.handleRemoveOne} className="btn btn-warning">- 1</button>
                    <button onClick={this.handleReset} className="btn btn-danger">Reset</button>
                </div>

            </div>
        )
    };
}

ReactDOM.render(<Counter/>, document.getElementById('app'));