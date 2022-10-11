import React from 'react';

export const Button = ({ items, total, onClick }) => {
  return (
    <button type="button" onClick={onClick}>
      Load More
    </button>
  );
};

//   if (items.length === 0) {
//     return <p>No content to display</p>;
//   } else if (items.length === total) {
//     return <p>You've all caught up!</p>;
//   } else {
//     return <button onClick={onClick}>Load more</button>;
//   }
// };
