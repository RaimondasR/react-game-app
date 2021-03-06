import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from 'react-router-dom';
import { setWeapon, updateMoney, removeFromInventory } from '../features/characters';

const effects = {
  s1: {
      title: "Strength +1",
      effect: {
          strength: 1
      }
  },
  s2: {
      title: "Strength +2",
      effect: {
          strength: 2
      }
  },
  s3: {
      title: "Strength +3",
      effect: {
          strength: 3
      }
  },
  s4: {
      title: "Strength +4",
      effect: {
          strength: 4
      }
  },
  s5: {
      title: "Strength +5",
      effect: {
          strength: 5
      }
  },
  s6: {
      title: "Strength +6",
      effect: {
          strength: 6
      }
  },
  s7: {
      title: "Strength +7",
      effect: {
          strength: 7
      }
  },
  s8: {
      title: "Strength +8",
      effect: {
          strength: 8
      }
  },
  s9: {
      title: "Strength +9",
      effect: {
          strength: 9
      }
  },
  s10: {
      title: "Strength +10",
      effect: {
          strength: 10
      }
  },
  d1: {
      title: "Damage +1",
      effect: {
          damage: 1
      }
  },
  d2: {
      title: "Damage +2",
      effect: {
          damage: 2
      }
  },
  d3: {
      title: "Damage +3",
      effect: {
          damage: 3
      }
  },
  d4: {
      title: "Damage +4",
      effect: {
          damage: 4
      }
  },
  d5: {
      title: "Damage +5",
      effect: {
          damage: 5
      }
  },
  d6: {
      title: "Damage +6",
      effect: {
          damage: 6
      }
  },
  d7: {
      title: "Damage +7",
      effect: {
          damage: 7
      }
  },
  d8: {
      title: "Damage +8",
      effect: {
          damage: 8
      }
  },
  d9: {
      title: "Damage +9",
      effect: {
          damage: 9
      }
  },
  d10: {
      title: "Damage +10",
      effect: {
          damage: 10
      }
  },
  h1: {
      title: "Health +10",
      effect: {
          health: 10
      }
  },
  h2: {
      title: "Health +20",
      effect: {
          health: 10
      }
  },
  h3: {
      title: "Health +30",
      effect: {
          health: 30
      }
  },
  h4: {
      title: "Health +40",
      effect: {
          health: 40
      }
  },
  h5: {
      title: "Health +50",
      effect: {
          health: 50
      }
  },
  h6: {
      title: "Health +60",
      effect: {
          health: 60
      }
  },
  h7: {
      title: "Health +70",
      effect: {
          health: 70
      }
  },
  h8: {
      title: "Health +80",
      effect: {
          health: 80
      }
  },
  h9: {
      title: "Health +90",
      effect: {
          health: 90
      }
  },
  h10: {
      title: "Health +100",
      effect: {
          health: 100
      }
  },
  e1: {
      title: "Energy +10",
      effect: {
          energy: 10
      }
  },
  e2: {
      title: "Energy +20",
      effect: {
          energy: 20
      }
  },
  e3: {
      title: "Energy +30",
      effect: {
          energy: 30
      }
  },
  e4: {
      title: "Energy +40",
      effect: {
          energy: 40
      }
  },
  e5: {
      title: "Energy +50",
      effect: {
          energy: 50
      }
  },
  e6: {
      title: "Energy +60",
      effect: {
          energy: 60
      }
  },
  e7: {
      title: "Energy +70",
      effect: {
          energy: 70
      }
  },
  e8: {
      title: "Energy +80",
      effect: {
          energy: 80
      }
  },
  e9: {
      title: "Energy +90",
      effect: {
          energy: 90
      }
  },
  e10: {
      title: "Energy +100",
      effect: {
          energy: 100
      }
  },
  sta1: {
      title: "Stamina +1",
      effect: {
          stamina: 1
      }
  },
  sta2: {
      title: "Stamina +2",
      effect: {
          stamina: 2
      }
  },
  sta3: {
      title: "Stamina +3",
      effect: {
          stamina: 3
      }
  },
  sta4: {
      title: "Stamina +4",
      effect: {
          stamina: 4
      }
  },
  sta5: {
      title: "Stamina +5",
      effect: {
          stamina: 5
      }
  },
  sta6: {
      title: "Stamina +6",
      effect: {
          stamina: 6
      }
  },
  sta7: {
      title: "Stamina +7",
      effect: {
          stamina: 7
      }
  },
  sta8: {
      title: "Stamina +8",
      effect: {
          stamina: 8
      }
  },
  sta9: {
      title: "Stamina +9",
      effect: {
          stamina: 9
      }
  },
  sta10: {
      title: "Stamina +10",
      effect: {
          stamina: 10
      }
  },
  str1: {
      title: "Strength +1",
      effect: {
          strength: 1
      }
  },
  str2: {
      title: "Strength +2",
      effect: {
          strength: 2
      }
  },
  str3: {
      title: "Strength +3",
      effect: {
          strength: 3
      }
  },
  str4: {
      title: "Strength +4",
      effect: {
          strength: 4
      }
  },
  str5: {
      title: "Strength +5",
      effect: {
          strength: 5
      }
  },
  str6: {
      title: "Strength +6",
      effect: {
          strength: 6
      }
  },
  str7: {
      title: "Strength +7",
      effect: {
          strength: 7
      }
  },
  str8: {
      title: "Strength +8",
      effect: {
          strength: 8
      }
  },
  str9: {
      title: "Strength +9",
      effect: {
          strength: 9
      }
  },
  str10: {
      title: "Strength +10",
      effect: {
          strength: 10
      }
  },
  i1: {
      title: "Inventory slots +1",
      effect: {
          inventorySlots: 1
      }
  },
  i2: {
      title: "Inventory slots +2",
      effect: {
          inventorySlots: 2
      }
  },
  i3: {
      title: "Inventory slots +3",
      effect: {
          inventorySlots: 3
      }
  },
  i4: {
      title: "Inventory slots +4",
      effect: {
          inventorySlots: 4
      }
  },
  i5: {
      title: "Inventory slots +5",
      effect: {
          inventorySlots: 5
      }
  },
  i6: {
      title: "Inventory slots +6",
      effect: {
          inventorySlots: 6
      }
  },
  i7: {
      title: "Inventory slots +7",
      effect: {
          inventorySlots: 7
      }
  },
  i8: {
      title: "Inventory slots +8",
      effect: {
          inventorySlots: 8
      }
  },
  i9: {
      title: "Inventory slots +9",
      effect: {
          inventorySlots: 9
      }
  },
  i10: {
      title: "Inventory slots +10",
      effect: {
          inventorySlots: 10
      }
  }

}

const PlayerInventory = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const char = useSelector((state) => state.character.value.character);
  const inventory = useSelector((state) => state.character.value.inventory);
  // Player's weapons array ?
  const wpnArr = [...Array(char.inventorySlots - inventory.length).keys()];


  function getEffects(effectsArr) {
    let result = "";

      effectsArr.map(x => result += effects[x].title + "\n");
      return result;

  }

  // type : weapon, potion, simply item 
  // by clicking inventory's weapon, it can be sold or put to the player's slot
  // depending on active page
  function action(type, item, index) {
    if (type === 'weapon') {
      if (location.pathname === "/main") {
        dispatch(setWeapon({item, index}));
      }
      if (location.pathname === "/shop") {
        dispatch(updateMoney({add: true, gold: item.price / 2}));
        dispatch(removeFromInventory(index));
      }
    }
    if (type === 'potion') {
      if (location.pathname === "/shop") {
        dispatch(updateMoney({add: true, gold: item.price / 2}));
        dispatch(removeFromInventory(index));
      }
    }
    if (type === 'item') {
      if (location.pathname === "/shop") {
        dispatch(updateMoney({add: true, gold: item.price}));
        dispatch(removeFromInventory(index));
      }
    }
  }


  function identifyItem(item, index) {
    if(item.maxDamage) {
      // 1. item is weapon
      return     (
        <div key={index} 
             className="itemSlot d-flex row a-center" 
             onClick={() => action('weapon', item, index)}
        >
          <div className="ml50">
            <img src={item.image} alt="" />
          </div>
          <div className="ml50">
            <div>Max. Damage: {item.maxDamage}</div>
            <div>Price: {item.price}</div>
            <div>Energy per Hit: {item.energyPerHit}</div>           
          </div>
          <div className="effectsWrapper ml50">
            {getEffects(item.effects)}
          </div>
        </div>
      )
    }

    if(item.effect) {
      // 2. item is potion
      return (
        <div key={index} 
             className="itemSlot d-flex row a-center" 
             onClick={() => action('potion', item, index)}
        >
          <div className="ml50">
            <img src={item.image} alt="" />
          </div>
          <div className="ml50">
            <div>Effect: {item.title}</div>
            <div>Price: {item.price}</div>               
          </div>
      </div>
      )
    }

    // 3. item is simple item ??
    return (
      <div key={index} 
           className="itemSlot d-flex row a-center"
           onClick={() => action('item', item, index)}
      >
        <div className="ml50">
          <img src={item.image} alt="" />
        </div>
        <div className="ml50">          
          <div>Price: {item.price}</div>               
        </div>
    </div>
    )
  }

  return (
    <div className="playerInventory d-flex column grow2" >
        <div><h3>Player Inventory List</h3></div>
        <div>
          {inventory.map((x, i) => identifyItem(x, i))};

          {wpnArr.map((x, i) => <div key={i} className="itemSlot"></div>)}
        </div>

    </div>
  );
};

export default PlayerInventory;