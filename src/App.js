import './App.css';
import Character from './components/Character';

function App() {
  const characters = [
    {
        image: "https://images.blz-contentstack.com/v3/assets/blt3452e3b114fab0cd/blte097d3ac18c5b8ed/6165ec51ff59d903990f26e3/EE3E9KVL9ROW1613677289232.png",
        race: "Human",
        damage: 3,
        health: 150,
        energy: 50,
        stamina: 3,
        strength: 1,
        inventorySlots: 3,
        gold: 100
    },
    {
        image: "https://images.blz-contentstack.com/v3/assets/blt3452e3b114fab0cd/bltad40c8b16ba5146c/6165db02ff59d903990f26dd/3BSJB91SIUBO1613677288515.png",
        race: "Dwarf",
        damage: 5,
        health: 90,
        energy: 30,
        stamina: 4,
        strength: 3,
        inventorySlots: 5,
        gold: 300
    },
    {
        image: "https://images.blz-contentstack.com/v3/assets/blt3452e3b114fab0cd/bltdd9c3bc7630ea097/6165ee1b85a779070bc77f55/A62H0NRB056O1613677289519.png",
        race: "Elf",
        damage: 4,
        health: 100,
        energy: 40,
        stamina: 5,
        strength: 1,
        inventorySlots: 2,
        gold: 200
    },
    {
        image: "https://images.blz-contentstack.com/v3/assets/blt3452e3b114fab0cd/blt5440cbe6b11972e4/6165e787c7341a058edee6c1/ZGHFCTYH33H41613677288710.png",
        race: "Gnome",
        damage: 3,
        health: 80,
        energy: 80,
        stamina: 7,
        strength: 1,
        inventorySlots: 4,
        gold: 1000
    },

    {
        image: "https://images.blz-contentstack.com/v3/assets/blt3452e3b114fab0cd/blt8a0bea138cdc9f77/6165eebb70b75d5011e405d4/GYI6XASNQ8YE1613677290450.png",
        race: "Orc",
        damage: 7,
        health: 120,
        energy: 40,
        stamina: 1,
        strength: 10,
        inventorySlots: 5,
        gold: 50
    },
    {
        image: "https://images.blz-contentstack.com/v3/assets/blt3452e3b114fab0cd/blte86b6ed1f29656b9/6165e7dedfd0436b6dcf6e2e/YAAFZMAKCVPG1613677288954.png",
        race: "Goblin",
        damage: 5,
        health: 90,
        energy: 90,
        stamina: 5,
        strength: 2,
        inventorySlots: 3,
        gold: 200
    },
    {
        image: "https://images.blz-contentstack.com/v3/assets/blt3452e3b114fab0cd/blt9d279b401555fd09/6165efc047c23d6a01ffdf49/NF9Y4RYPBLZ91613677291342.png",
        race: "Troll",
        damage: 6,
        health: 100,
        energy: 70,
        stamina: 4,
        strength: 4,
        inventorySlots: 3,
        gold: 100
    },
    {
        image: "https://images.blz-contentstack.com/v3/assets/blt3452e3b114fab0cd/blt0b1f2cd145aedbcd/6165f001a3e18902e03811d3/4UX5EM1CFKV81613677292421.png",
        race: "Undead",
        damage: 4,
        health: 40,
        energy: 50,
        stamina: 10,
        strength: 1,
        inventorySlots: 8,
        gold: 400
    },

]

  return (
    <div className="App d-flex column">
      <h4>react-game-app | task #D80T1</h4>
      <h3>START Page</h3>
      <h4>to start the game please choose a Character and click on it...</h4>
      <div className ="d-flex row evenly">
        <Character 
          image={characters[0].image}
          race={characters[0].race}
          damage={characters[0].damage}
          health={characters[0].health}
          energy={characters[0].energy}
          stamina={characters[0].stamina}
          strength={characters[0].strength}
          inventorySlots={characters[0].inventorySlots}
          gold={characters[0].gold} 
        />
        <Character 
          image={characters[1].image}
          race={characters[1].race}
          damage={characters[1].damage}
          health={characters[1].health}
          energy={characters[1].energy}
          stamina={characters[1].stamina}
          strength={characters[1].strength}
          inventorySlots={characters[1].inventorySlots}
          gold={characters[1].gold} 
        />
        <Character 
          image={characters[2].image}
          race={characters[2].race}
          damage={characters[2].damage}
          health={characters[2].health}
          energy={characters[2].energy}
          stamina={characters[2].stamina}
          strength={characters[2].strength}
          inventorySlots={characters[2].inventorySlots}
          gold={characters[2].gold} 
        />
        <Character 
          image={characters[3].image}
          race={characters[3].race}
          damage={characters[3].damage}
          health={characters[3].health}
          energy={characters[3].energy}
          stamina={characters[3].stamina}
          strength={characters[3].strength}
          inventorySlots={characters[3].inventorySlots}
          gold={characters[3].gold} 
        />
        <Character 
          image={characters[4].image}
          race={characters[4].race}
          damage={characters[4].damage}
          health={characters[4].health}
          energy={characters[4].energy}
          stamina={characters[4].stamina}
          strength={characters[4].strength}
          inventorySlots={characters[4].inventorySlots}
          gold={characters[4].gold} 
        />
        <Character 
          image={characters[5].image}
          race={characters[5].race}
          damage={characters[5].damage}
          health={characters[5].health}
          energy={characters[5].energy}
          stamina={characters[5].stamina}
          strength={characters[5].strength}
          inventorySlots={characters[5].inventorySlots}
          gold={characters[5].gold} 
        />
        <Character 
          image={characters[6].image}
          race={characters[6].race}
          damage={characters[6].damage}
          health={characters[6].health}
          energy={characters[6].energy}
          stamina={characters[6].stamina}
          strength={characters[6].strength}
          inventorySlots={characters[6].inventorySlots}
          gold={characters[6].gold} 
        />
        <Character 
          image={characters[7].image}
          race={characters[7].race}
          damage={characters[7].damage}
          health={characters[7].health}
          energy={characters[7].energy}
          stamina={characters[7].stamina}
          strength={characters[7].strength}
          inventorySlots={characters[7].inventorySlots}
          gold={characters[7].gold} 
        />
      </div>    
    </div>
  );
}

export default App;
