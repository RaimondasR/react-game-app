import {createSlice} from '@reduxjs/toolkit';

export const monstersSlice = createSlice ({
    name: "monsters",
    initialState: {
      value: [
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/b/b1/Basilisk.png",
            name: "Basilisk",
            maxDamage: 5,
            health: 100,
            maxItemsDrop: 1
        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/7/75/VampireBat.png",
            name: "Bat",
            maxDamage: 8,
            health: 80,
            maxItemsDrop: 1
        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/a/a4/Bear.png",
            name: "Bear",
            maxDamage: 20,
            health: 150,
            maxItemsDrop: 3
        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/6/60/Beetle.png",
            name: "Beetle",
            maxDamage: 3,
            health: 300,
            maxItemsDrop: 1
        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/6/6f/Boar.png",
            name: "Boar",
            maxDamage: 7,
            health: 85,
            maxItemsDrop: 1
        },
        {
            image: "data:image/jpeg;base64,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",
            name: "Alien",
            maxDamage: 130,
            health: 4000,
            maxItemsDrop: 10
        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/0/01/Vulture.png",
            name: "Carrion bird",
            maxDamage: 6,
            health: 170,
            maxItemsDrop: 1
        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/3/36/Chimera.png",
            name: "Chimaera",
            maxDamage: 12,
            health: 190,
            maxItemsDrop: 2
        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/3/33/Clefthoof.png",
            name: "Clefthoof",
            maxDamage: 50,
            health: 500,
            maxItemsDrop: 4
        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/6/63/Crab.png",
            name: "Crab",
            maxDamage: 8,
            health: 120,
            maxItemsDrop: 3
        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/4/46/Crocolisk.png",
            name: "Crocolisk",
            maxDamage: 38,
            health: 420,
            maxItemsDrop: 3
        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/5/51/Devilsaur.png",
            name: "Devilsaur",
            maxDamage: 25,
            health: 250,
            maxItemsDrop: 3
        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/6/6c/Diemetradon.png",
            name: "Diemetradon",
            maxDamage: 12,
            health: 90,
            maxItemsDrop: 2
    
        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/3/34/Dragonhawk1.png",
            name: "Dragonhawk",
            maxDamage: 120,
            health: 20,
            maxItemsDrop: 5
        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/0/03/Elekk.png",
            name: "Elekk",
            maxDamage: 34,
            health: 160,
            maxItemsDrop: 4
    
        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/7/73/Fox.png",
            name: "Fox",
            maxDamage: 5,
            health: 50,
            maxItemsDrop: 2
    
        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/2/2f/Gryphon.png",
            name: "Gryphon",
            maxDamage: 18,
            health: 350,
            maxItemsDrop: 2
    
        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/8/84/Gorilla.png",
            name: "Gorilla",
            maxDamage: 30,
            health: 240,
            maxItemsDrop: 3
    
        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/c/c3/Horse.png",
            name: "Horse",
            maxDamage: 3,
            health: 150,
            maxItemsDrop: 1
    
        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/9/9d/Hydra.png",
            name: "Hydra",
            maxDamage: 40,
            health: 500,
            maxItemsDrop: 5
        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/e/ee/HyenaBlue.png",
            name: "Hyena",
            maxDamage: 9,
            health: 120,
            maxItemsDrop: 2
    
        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/e/e5/Cat_lion.png",
            name: "Lion",
            maxDamage: 13,
            health: 200,
            maxItemsDrop: 2
    
        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/b/b8/Lynx.png",
            name: "Lynx",
            maxDamage: 12,
            health: 150,
            maxItemsDrop: 1
    
        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/9/9c/Mastiff.png",
            name: "Mastiff",
            maxDamage: 7,
            health: 80,
            maxItemsDrop: 1
    
        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/2/27/Monkey.png",
            name: "Monkey",
            maxDamage: 4,
            health: 300,
            maxItemsDrop: 1
    
        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/0/08/Netherray.png",
            name: "Nether ray",
            maxDamage: 6,
            health: 120,
            maxItemsDrop: 1
    
        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/b/be/OwlWhite.png",
            name: "Owl",
            maxDamage: 7,
            health: 70,
            maxItemsDrop: 2
    
        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/3/36/Panther.png",
            name: "Panther",
            maxDamage: 19,
            health: 40,
            maxItemsDrop: 3
    
        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/1/16/Parrot.png",
            name: "Parrot",
            maxDamage: 2,
            health: 30,
            maxItemsDrop: 1
    
        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/6/66/Raven.png",
            name: "Raven",
            maxDamage: 8,
            health: 150,
            maxItemsDrop: 1
    
        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/c/c2/Rhino.png",
            name: "Rhinoceros",
            maxDamage: 120,
            health: 1500,
            maxItemsDrop: 8
        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/a/ab/Scorpion.png",
            name: "Scorpid",
            maxDamage: 25,
            health: 300,
            maxItemsDrop: 3
    
        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/1/1a/Sea_Snake.png",
            name: "Sea snake",
            maxDamage: 5,
            health: 50,
            maxItemsDrop: 1
    
        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/8/89/Serpent.png",
            name: "Serpent",
            maxDamage: 12,
            health: 80,
            maxItemsDrop: 1
    
        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/1/14/Shark.png",
            name: "Shark",
            maxDamage: 15,
            health: 210,
            maxItemsDrop: 2
    
        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/5/51/Sporebat.png",
            name: "Spore bat",
            maxDamage: 9,
            health: 150
        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/1/10/Stag.png",
            name: "Stag",
            maxDamage: 4,
            health: 200,
            maxItemsDrop: 2
    
        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/1/12/Strider.png",
            name: "Tallstrider",
            maxDamage: 20,
            health: 80
        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/3/3c/Threshadon.png",
            name: "Threshadon",
            maxDamage: 70,
            health: 800,
            maxItemsDrop: 3
    
        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/e/e9/Turtle.png",
            name: "Turtle",
            maxDamage: 5,
            health: 5000,
            maxItemsDrop: 10
        }
    ],
    },
    reducers: {
      setMonsters: (state, action) => {
        state.value = action.payload;  
      },  
    }

})

export const {setMonsters} = monstersSlice.actions;

export default monstersSlice.reducer;
