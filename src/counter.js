let count = 0;

const addOne = () => {
    count ++;
    renderCounterApp();
    console.log('Added one');
};

const removeOne = () => {
    count --;
    renderCounterApp();
    console.log('Removed one');
};

const reset = () => {
    count = 0;
    renderCounterApp();
    console.log('Resetted');
};

const appRoot = document.getElementById('app');

const renderCounterApp = () => {
    const templateTwo = (
        <div>
            <h1>Count: {count}</h1>

            <div className="btn-list">
                <button onClick={addOne} className="btn btn-primary">+ 1</button>
                <button onClick={removeOne} className="btn btn-warning">- 1</button>
                <button onClick={reset} className="btn btn-danger">Reset</button>
            </div>

        </div>
    );
    ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();