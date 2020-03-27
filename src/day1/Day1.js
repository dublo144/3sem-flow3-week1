import React from 'react';
import App1 from './App1';
import App2 from './App2';
import App3 from './App3';
import { Divider } from 'semantic-ui-react';

export const Day1 = () => {
    return (
        <>
            <a
                target="_blank"
                href="https://docs.google.com/document/d/17iG0I2cpgdfmOIW9J-L8kNaO47DILFIzEc9Yi8yW6-o/edit#heading=h.8o1eqix8mz7j"
            >
                Link to assignment
            </a>
            <App1 />
            <Divider />
            <App2 />
            <Divider />
            <App3 />
        </>
    );
};

export default Day1;
