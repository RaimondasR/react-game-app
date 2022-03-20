import React, {useEffect} from 'react';
import PlayerInfo from '../components/PlayerInfo';
import PlayerInventory from '../components/PlayerInventory'

const MainPage = () => {
  return (
    <div className="MainPage d-flex column grow1">
      <div><h3 className="m5">MAIN Page</h3></div>
      <div className="d-flex row space-evn">
        <div className="d-flex grow1 ml10 mr10">
          <PlayerInfo />
        </div>
        <div className="d-flex grow2 mr10">
          <PlayerInventory />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
