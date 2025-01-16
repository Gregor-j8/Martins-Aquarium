import { database } from "./aquariumData.js"
const tipsForFish = database.tips

export const tipList = () => {
    let tipsHTML = '<h1>Tips</h1>'
    
        for(const tip of tipsForFish) {
            tipsHTML += `
            <article class="fish-tips">
                <ul class="tips">
                        <li class="tip">${tip.topic}</li>
                        <li class="tip">${tip.text}</li>
                    </ul>
            </article>`
      }             
      return tipsHTML 
 }