import React from 'react';
import Option from './Option';

const Options = (props) => (
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

export default Options;