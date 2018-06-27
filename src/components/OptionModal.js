import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
    <Modal
        ariaHideApp={false}
        isOpen={!!props.selectedOption}
        contentLabel="Selected option"
        >
        <h3>Selected option</h3>

    </Modal>
);

export default OptionModal;