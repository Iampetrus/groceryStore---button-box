import React from 'react';
import './style.css'; // Importa el archivo CSS
import GroceryItem from './GroceryItem';

function App() {
  return (
    <div>
      <GroceryItem item="Eggs" />
      <GroceryItem item="Banana" />
      <GroceryItem item="Strawberry" />
      <GroceryItem item="Bread" />
    </div>
  );
}

export default App;
