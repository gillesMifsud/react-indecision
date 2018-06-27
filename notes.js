// Var inside template
`Hi my name is ${this.name}`

//If only renders jsx: use const functions
const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    );
};

//set defaultProps
IndecisionApp.defaultProps = {
    options: ['option one']
};


//lifecyclehooks :

componentDidMount() {
    console.log('fetching data'); // Use to fetch
}
componentDidUpdate(prevProps, prevState) {
    console.log('saving data'); // Use to save
}
componentWillUnmount() {

}