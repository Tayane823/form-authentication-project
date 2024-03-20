import React from 'react';
import { Link } from 'react-router-dom';

const BackToHome = () => {
  return (
    <div>
      <button><Link to="/">Home</Link></button>
    </div>
  );
};

export default BackToHome;