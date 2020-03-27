import React, { useState, useEffect, Fragment } from 'react';

function NumberList({ numbers }) {
    console.log('--NUMBERS -->', numbers);
    const listItems = numbers.map((n, index) => <ListItem key={index} number={n} />);
    return <ul>{listItems}</ul>;
}

const NumberTable = ({ numbersArray }) => {
    return (
        <table>
            <tbody>
                {numbersArray &&
                    numbersArray.map((number, index) => (
                        <tr key={index}>
                            <td>{number}</td>
                        </tr>
                    ))}
            </tbody>
        </table>
    );
};

const ListItem = ({ number }) => <li>{number}</li>;

function ListDemo(props) {
    console.log(props.numbers);
    return (
        <div>
            <h2>All numbers passed in via props</h2>
            <NumberList numbers={props.numbers} />
        </div>
    );
}
export default function ListDemoApp() {
    const [numbers, setNumbers] = useState([1, 2, 3, 4]);
    useEffect(() => {
        const interval = setInterval(() => {
            const nextNumber = numbers.length + 1;
            const newArray = [...numbers, nextNumber];
            setNumbers(newArray);
        }, 15000);
        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <Fragment>
            <h2>List and Keys</h2>
            <ListDemo numbers={numbers} />
            <NumberTable numbersArray={numbers} />
        </Fragment>
    );
}
