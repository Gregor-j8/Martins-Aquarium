import { fishList } from './fishList.js'
import { tipList } from './tipList.js'
import { locationList } from './locationList.js'

// Generate the fish list
const fishHTML = fishList()
const fishTank = document.getElementById("fishList")

if (fishTank) {
    fishTank.innerHTML = fishHTML
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