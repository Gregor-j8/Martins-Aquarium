import { database } from "./aquariumData.js"
const locationFish = database.locations

export const locationList = () => {
    let locationHTML = '<h1>locations</h1>'
    
        for(const location of locationFish) {
            locationHTML += `
                <article class="location-tips">
                    <section class="location">${location.name}</section>
                    <section class="location">${location.country}</section>
                    <section class="location">${location.description}</section>
                </article>`
        }          
      return locationHTML    
 }