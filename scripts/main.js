import { mostRegularFish, mostSoldierFish, mostHolyFish } from './fishFilter.js'
import { tipList } from './tipList.js'
import { locationList } from './locationList.js'

// Generate the fish list
const regularFishHTML = mostRegularFish() 
const soldierFishHTML = mostSoldierFish()
const holyFishHTML = mostHolyFish()
const fishTank = document.getElementById("fishList")

if (fishTank) {
    fishTank.innerHTML = holyFishHTML + soldierFishHTML + regularFishHTML
}

// Generate the care tips
const tipHTML = tipList()
const tipsHolder = document.getElementById("tipList")

if (tipsHolder) {
    tipsHolder.innerHTML = tipHTML
}
// Generate the location list
const locationHTML = locationList()
const locationHolder = document.getElementById("locationList")

if (locationHolder) {
    locationHolder.innerHTML = locationHTML
}
// Render each HTML string to the correct DOM element