import React, { Fragment } from 'react';
import person, { males, females } from './file2';

const App2 = () => {
    const { firstName, email } = person;
    console.log([...males, ...females]);
    console.log([...males, 'Kurt', 'Helle', ...females, 'Tina']);

    const personV2 = {
        ...person,
        friends: [...males, ...females],
        phone: 123456
    };

    console.log(personV2);
    return (
        <Fragment>
            <h2>2 Object and Array Destructuring </h2>
            <p>{firstName}</p>
            <p>{email}</p>
            <h5>PersonV2</h5>
            <p>Name: {personV2.firstName}</p>
            <p>Email: {personV2.email}</p>
            <p>Friends: {personV2.friends}</p>
            <p>Phone: {personV2.phone}</p>
        </Fragment>
    );
};

export default App2;
