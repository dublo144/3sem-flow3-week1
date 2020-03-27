import React, { Fragment } from 'react';
import upper, { text1, text2, text3 } from './file1';

function App() {
    return (
        <Fragment>
            <h2>1 Understanding ES6 Modules – import and export</h2>
            <p>{upper(text1)}</p>
            <p>{upper(text2)}</p>
            <p>{upper(text3)}</p>
            <p>{upper('Some other text')}</p>
        </Fragment>
    );
}

export default App;
