import { database } from './aquariumData.js';
const fishes = database.fish

export const fishList = () => {
    let fishHTML = '';
     
        for (const fish of fishes) {
            fishHTML += `
                <article class="movie">
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
     
        return  fishHTML
     };