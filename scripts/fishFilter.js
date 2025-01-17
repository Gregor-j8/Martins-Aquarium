import { database } from './aquariumData.js';
const fishes = database.fish

export const mostHolyFish = () => {
    let holyHTML = ''
    fishes.map(fish => {
        if (fish.length % 3 === 0) {
            holyHTML += `
            <article class="fish">    
                <img src="${fish.image}" alt="${fish.name} poster" class="fish-picture">
                <div class="fish-details">
                    <h2 class="fish-name">${fish.name}</h2>
                    <p class="fish-location">${fish.location}</p>
                    <p class="fish-diet">${fish.diet}</p>
                    <p class="fish-length">${fish.length}</p>
                    <p class="fish-species">${fish.species}</p>
                </div>
            </article>
    `;
        }
    })
    return holyHTML
}

export const mostSoldierFish = () => {
    let soldierHTML = ''
    fishes.map(fish => {
        if (fish.length % 5 === 0) {
            soldierHTML += `
            <article class="fish">    
            <img src="${fish.image}" alt="${fish.name} poster" class="fish-picture">
            <div class="fish-details">
                <h2 class="fish-name">${fish.name}</h2>
                <p class="fish-location">${fish.location}</p>
                <p class="fish-diet">${fish.diet}</p>
                <p class="fish-length">${fish.length}</p>
                <p class="fish-species">${fish.species}</p>
            </div>
        </article>
    `;
        }
    })
    return soldierHTML
}

export const mostRegularFish = () => {
    let regularHTML = ''
    fishes.map(fish => {
        if (fish.length % 3 !== 0 | fish.length % 5 !== 0) {
            regularHTML += `
            <article class="fish">    
            <img src="${fish.image}" alt="${fish.name} poster" class="fish-picture">
            <div class="fish-details">
                <h2 class="fish-name">${fish.name}</h2>
                <p class="fish-location">${fish.location}</p>
                <p class="fish-diet">${fish.diet}</p>
                <p class="fish-length">${fish.length}</p>
                <p class="fish-species">${fish.species}</p>
            </div>
        </article>
        `;
        }
    })
    return regularHTML
}