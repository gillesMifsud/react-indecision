import React from 'react';

const Action = (props) => (
    <div>
        <button onClick={props.handlePick}
                disabled={!props.hasOptions}
                className="btn btn-primary">
            What should I do ?
        </button>
    </div>
);

export default Action;