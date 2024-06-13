// Collection.jsx
import React from 'react';

const Collection = ({ imageUrl }) => {
  return (
    <div>
      <h2>Collection</h2>
      <img src={imageUrl} alt="Collection Item" />
    </div>
  );
};

export default Collection;
