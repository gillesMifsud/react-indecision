// Var inside template
`Hi my name is ${this.name}`;

// Converts to true a valid string, like 'test' and undefined as false
!!'test' = true;

/************Pass an event handler to a component*******************/
//IndecisionApp.js
handleCloseModal = () => {
    this.setState(() => ({ selectedOption: undefined }));
}
//Then in the component who will pass the event:
<OptionModal
    // selectedOption={this.state.selectedOption}
    handleCloseModal={this.handleCloseModal} // The component has now access to the prop handleCloseModal
/>
// Then in the OptionModal.js file the click handler bind to the funtion:
const OptionModal = (props) => (
    <Modal
        //ariaHideApp={false}
        //isOpen={!!props.selectedOption}
        //contentLabel="Selected option"
        >
        <h3>Selected option</h3>
        {props.selectedOption && <p>{ props.selectedOption }</p>}
        <button onClick={props.handleCloseModal}>Okay</button>
    </Modal>
);
/*******************************/

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