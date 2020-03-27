import React from 'react';

export const PersonTable = ({ persons }) => {
  return (
    <table>
      <tr>
        <th>ID</th>
        <th>Name</th>
      </tr>
      {persons.map((person) => (
        <tr>
          <td>{person.id}</td>
          <td>{person.name}</td>
        </tr>
      ))}
    </table>
  );
};
