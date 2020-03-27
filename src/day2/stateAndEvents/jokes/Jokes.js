import React, { useEffect, useState, Fragment } from 'react';

const Jokes = () => {
    const [joke, setJoke] = useState('');
    const [dadJoke, setDadJoke] = useState('');

    const doFetchData = async (url, opts = {}) => {
        const res = await fetch(url, opts);
        const json = res.json();
        return json;
    };

    const handleChuckNorris = () => {
        doFetchData('https://api.chucknorris.io/jokes/random').then(json => setJoke(json.value));
    };

    useEffect(() => {
        const interval = setInterval(() => {
            doFetchData('https://icanhazdadjoke.com/', {
                headers: {
                    Accept: 'application/json'
                }
            }).then(json => setDadJoke(json.joke));
        }, 10000);
        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <Fragment>
            <h2>Jokes</h2>
            <button onClick={handleChuckNorris}>Get Chuck Norris Joke</button>
            <p>{joke ? joke : ''}</p>
            <h3>Dad joke every 10 seconds</h3>
            <p>{dadJoke ? dadJoke : 'How do you make holy water? You boil the hell out of it.'}</p>
        </Fragment>
    );
};

export default Jokes;
