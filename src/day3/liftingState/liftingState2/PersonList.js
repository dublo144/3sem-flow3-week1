import React from 'react';

const PersonList = ({ persons }) => {
  return (
    <>
      <ul>
        {persons.map((person) => (
          <li key={person.id}>{person.name}</li>
        ))}
      </ul>
    </>
  );
};

export default PersonList;
