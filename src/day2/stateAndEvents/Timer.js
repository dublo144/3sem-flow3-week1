import React, { useState, useEffect } from 'react';

const Timer = () => {
    const now = new Date().toLocaleTimeString();
    const [currentTime, setCurrentTime] = useState(now);

    useEffect(() => {
        const interval = setInterval(() => setCurrentTime(new Date().toLocaleTimeString()), 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <h2>Timer</h2>
            <p>Current time is: {currentTime}</p>
        </>
    );
};

export default Timer;
