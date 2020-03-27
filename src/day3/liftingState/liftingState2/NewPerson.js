import React, { useState, useEffect } from 'react';

const NewPerson = (props) => {
  const [person, setPerson] = useState(props.nextPerson);

  const savePerson = (e) => {
    if (person.name === '') {
      return;
    }
    props.addPerson(person);
    e.preventDefault();
  };

  useEffect(() => setPerson({ ...props.nextPerson }), [props.nextPerson]);

  const onChange = (e) => {
    const value = e.target.value;
    person.name = value;
    setPerson({ ...person });
  };

  const title = person.id === '' ? 'Create new Person' : 'Edit Person';

  return (
    <div>
      <h4>{title}</h4>
      <form>
        <input value={person.name} onChange={onChange} />
        <br />
        <br />
        <button onClick={savePerson} className="btn btn-info">
          Save
        </button>
      </form>
      {person.id !== '' && <p>Editing person with</p>}
    </div>
  );
};

export default NewPerson;
