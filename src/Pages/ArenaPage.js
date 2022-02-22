import React from 'react';
import ArenaCard from '../components/ArenaCard';

const ArenaPage = () => {
  return (
    <div className="d-flex column">
      <h3 className="m10">ARENA Page</h3>
      <div className="d-flex row space-arnd">
        <ArenaCard />
        <div className="d-flex column center">
          <div className="btn">Attack</div>
        </div>        
        <ArenaCard />
      </div>
    </div>
  );
};

export default ArenaPage;

