import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
    <Modal
        ariaHideApp={false}
        onRequestClose={props.handleClearSelectedOption}
        isOpen={!!props.selectedOption}
        contentLabel="Selected option"
        >
        <h3>Selected option</h3>
        {props.selectedOption && <p>{ props.selectedOption }</p>}
        <button onClick={props.handleClearSelectedOption}>Okay</button>
    </Modal>
);

export default OptionModal;