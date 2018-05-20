"use strict";

const appRoot = document.getElementById('app');

const app = {
    title: 'Visibility exercise'
};

let isVisible = false;

const toggleVisibility = () => {
    isVisible = !isVisible;
    console.log(isVisible);
    render();
};

const render = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>

            {isVisible ? <p>This text is hidden</p> : ''}

            <button onClick={toggleVisibility}>
                {isVisible ? 'Hide details' : 'Show details'}
            </button>
        </div>
    );
    ReactDOM.render(template, appRoot);
};

render();

