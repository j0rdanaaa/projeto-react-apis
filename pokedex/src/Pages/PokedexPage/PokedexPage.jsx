import React from 'react';

const PokedexPage = ({ children }) => {
  return (
    <div className="page">
      <Header />
      {children}
    </div>
  );
};

export default PokedexPage;