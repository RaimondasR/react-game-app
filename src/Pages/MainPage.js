import React, {useEffect} from 'react';
import PlayerProfile from "../components/PlayerProfile";

const MainPage = () => {
  return (
    <div className="MainPage d-flex column">
      <div><h3>MAIN Page</h3></div>

      <PlayerProfile><PlayerProfile />
      {/*    */}
      {/*<div className="Toolbar d-flex row left">*/}
      {/*  <div><h3>Shop</h3></div>*/}
      {/*  <div><h3>Arena</h3></div> */}
      {/*</div>*/}
      {/*<div className="d-flex row">*/}
      {/*  <div className="One d-flex grow1">*/}
      {/*    Character Info div*/}
      {/*  </div>*/}
      {/*  <div className="Two d-flex grow2">*/}
      {/*    User Inventory div*/}
      {/*  </div>*/}
      {/*</div>*/}

    </div>
  );
};

export default MainPage;
