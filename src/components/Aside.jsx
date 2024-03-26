import React from 'react';

function Aside({dogs, arr}) {
  console.log(dogs);
  console.log(arr)
  return (
    <aside>
      <h3>Roster:</h3>
      <ol>
        {dogs.map((dog) => (
          dog.present ? <li key={dog.name}>{dog.name}</li> : null
        ))}
      </ol>
    </aside>
  );
}

export default Aside;
