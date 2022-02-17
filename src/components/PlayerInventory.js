import React from 'react';
import { useSelector } from "react-redux";


const PlayerInventory = () => {
  const char = useSelector((state) => state.character.value.character);
  // Player's weapons array ?
  const wpnArr = [...Array(char.inventorySlots).keys()];

  return (
    <div className="playerInventory d-flex column grow2" >
        <div><h3>Player Inventory List</h3></div>
        <div className="d-flex row f-wrap">
          {wpnArr.map((x, i) =>
            <div key={i} className="slot4Weapon">
            </div>
          )}
        </div>

    </div>
  );
};

export default PlayerInventory;