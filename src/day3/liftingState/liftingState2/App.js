import React, { useState } from 'react';
import '../proofOfConcept/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PersonList from './PersonList';
import uuid from 'uuid/v1';
import NewPerson from './NewPerson';
import { PersonTable } from './PersonTable';

const App = () => {
  const initialData = [
    { id: uuid(), name: 'John' },
    { id: uuid(), name: 'Carsten' },
    { id: uuid(), name: 'Børge' }
  ];
  const [persons, setPersons] = useState(initialData);
  const [newPerson, setNewPerson] = useState({ id: '', name: '' });

  const addPerson = (person) => {
    if (person.id === '') {
      person.id = uuid();
      persons.push(person);
    } else {
      let personToEdit = persons.find((p) => p.id === person.id);
      personToEdit.name = person.name;
    }
    setPersons([...persons]);
    setNewPerson({ id: '', name: '' });
  };

  return (
    <div className="container outer">
      <h2 style={{ textAlign: 'center', marginBottom: 25 }}>Props and Lifting State Demo</h2>

      <div className="row">
        <div className="col-6 allTodos">
          <PersonList persons={persons} />
          <PersonTable persons={persons} />
        </div>
        <div className="col-5 new-todo">
          <NewPerson addPerson={addPerson} nextPerson={newPerson} />
        </div>
      </div>
    </div>
  );
};

export default App;
