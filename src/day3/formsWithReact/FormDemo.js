import React, { useState } from 'react';

const NameForm = () => {
    const [name, setName] = useState('');

    function handleChange(event) {
        setName(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        alert(name);
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" onChange={handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
            {name}
        </>
    );
};

export default function FormDemo() {
    return (
        <div style={{ marginTop: 25 }}>
            <h2>Form Demo</h2>
            <NameForm />
        </div>
    );
}
