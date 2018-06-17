class Visibility extends React.Component {
    constructor(props) {
        super(props);
        this.toggleVisibility = this.toggleVisibility.bind(this);
        this.state = {
            title: 'Visibility exercice',
            isVisible: false
        }
    }
    toggleVisibility () {
        this.setState((prevState) => {
            return {
                isVisible: !prevState.isVisible
            }
        });
    }
    render() {
        return (
            <div>
                <h1>{this.state.title}</h1>

                <button onClick={this.toggleVisibility}>
                    {this.state.isVisible ? 'Hide details' : 'Show details'}
                </button>

                {this.state.isVisible && (
                    <p>Text is now revealed!</p>
                )}
            </div>
        );
    }
}

ReactDOM.render(<Visibility/>, document.getElementById('app'));

