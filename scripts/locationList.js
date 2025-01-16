import { database } from "./aquariumData.js"
const locationFish = database.locations

export const locationList = () => {
    let locationHTML = ''
    
        for(const location of locationFish) {
            locationHTML += `
                <article class="location-tips">
                    <section class="location">Name: ${location.name}</section>
                    <section class="location">country: ${location.country}</section>
                    <section class="location">description: ${location.description}</section>
                </article>`
        }          
      return locationHTML    
 }