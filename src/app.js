"use strict";

const appRoot = document.getElementById('app');

const app = {
  title: 'Indecision app',
  subtitle: 'The subtitle of the app',
  options: []
};

const onFormSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        render();
    }
};

const removeAll = () => {
    app.options = [];
    render();
};

const render = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            {app.options.length > 0 ? <p>Here are your options</p> : <p>No options</p>}

            <p>{app.options.length}</p>
            <ol>
                <li>a</li>
                <li>b</li>
                <li>c</li>
            </ol>

            <div className="form-group">
                <button type="submit" className="btn btn-primary" onClick={removeAll}>Remove all</button>
            </div>

            <form onSubmit={onFormSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Add option</label>
                    <input type="text" className="form-control" name="option" id="name" aria-describedby="emailHelp"
                           placeholder="Add option here"/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
    ReactDOM.render(template, appRoot);
};

render();

