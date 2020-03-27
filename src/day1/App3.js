import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { names } from './file2';

function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
}

const WelcomePerson = props => {
    const { firstName, lastName, email } = props.person;
    return (
        <Fragment>
            <p>{firstName}</p>
            <p>{lastName}</p>
            <p>{email}</p>
        </Fragment>
    );
};

const App3 = () => {
    return (
        <>
            <h2>3 Composing Components</h2>
            <Welcome name="Sara" />
            <Welcome name="Cahal" />
            <Welcome name="Edite" />
            <Welcome />
            <Welcome name={45} />

            {names && names.map((name, index) => <WelcomePerson key={index} person={name} />)}
        </>
    );
};

Welcome.propTypes = {
    name: PropTypes.string.isRequired
};

WelcomePerson.propTypes = {
    person: PropTypes.shape({
        firstName: PropTypes.string.isRequired,
        lastName: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired
    })
};

export default App3;
