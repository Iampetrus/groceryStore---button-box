import React from 'react';

function GroceryItem({ item }) {
  function handleClick() {
    alert(`${item} added to the cart!`);
  }
  return (
    <button onClick={handleClick}>
      {item}
    </button>
  );
}

export default GroceryItem;

// function GroceryItem(props) {
//   function handleClick() {
//     alert(`${props.item} added to the cart!`);
//   }
//   return (
//     <button onClick={handleClick}>
//       {props.item}
//     </button>
//   );
// };

// or
// function GroceryItem(GroceryProps) {
//   function handleClick() {
//     alert(`${GroceryProps.item} added to the cart!`);
//   }
//   return (
//     <button onClick={handleClick}>
//       {GroceryProps.item}
//     </button>
//   );
// };
