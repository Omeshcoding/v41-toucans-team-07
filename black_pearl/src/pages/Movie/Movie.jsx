import React from 'react';
import { Link } from 'react-router-dom';
const Movie = () => {
  return (
    <div style={{ color: 'blue', textAlign: 'center' }}>
      <h2>This is Movies</h2>
      <Link to="/">homepage</Link>
    </div>
  );
};

export default Movie;
