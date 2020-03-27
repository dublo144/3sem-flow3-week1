import React, { useState, useEffect, Fragment } from 'react';

export const Count = ({ initialCount, increments, decrements }) => {
    const [count, setCount] = useState(initialCount);

    useEffect(() => {
        localStorage.setItem('count', count);
    }, [count]);

    return (
        <Fragment>
            <h2>Count</h2>
            <p>Click Count: {count}</p>
            <button onClick={() => setCount(count + increments)}>Increment Count</button>
            <button onClick={() => setCount(count - decrements)}>Decrement Count</button>
            <button onClick={() => setCount(0)}>Reset Count</button>
        </Fragment>
    );
};

Count.defaultProps = {
    initialCount: parseInt(localStorage.getItem('count')),
    increments: 1,
    decrements: 1
};
