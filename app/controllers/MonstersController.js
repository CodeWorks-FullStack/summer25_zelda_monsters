import { AppState } from "../AppState.js";
import { monstersService } from "../services/MonstersService.js";
import { Pop } from "../utils/Pop.js";

export class MonstersController {
  constructor() {
    console.log('MONSTERS CONTROLLER IS READY 👽🧌👹👻');
    // NOTE better to use an observer to draw our data since we don't know when that data will get here
    AppState.on('monsters', this.drawMonsters)
    // NOTE there will be no data to draw on page load, since we have to make the network request first
    // ❌ this.getTearsOfTheKingdomMonsters()
    this.getMonsters('totk')
  }

  async getTearsOfTheKingdomMonsters() {
    // NOTE we use a try/catch here because we don't know if our network request to the API will be successful
    try {
      // NOTE we will attempt to run this method. If no errors are `thrown`, we move on the next line
      await monstersService.getTearsOfTheKingdomMonsters()
      Pop.success('Got the monsters!')

      // NOTE if any error is `thrown` in the `try`, we will stop running the code in the `try` and instead run the code in the `catch` here
    } catch (error) {
      console.error('COULD NOT GET MONSTERS FROM API', error)
      Pop.error(error, 'SOMETHING WENT WRONG', 'try refreshing your page, or write better code dude')
    }
  }
  async getBreathOfTheWildMonsters() {
    try {
      await monstersService.getBreathOfTheWildMonsters()
      Pop.success('Got the monsters!')
    } catch (error) {
      console.error('COULD NOT GET MONSTERS FROM API', error)
      Pop.error(error, 'SOMETHING WENT WRONG', 'try refreshing your page, or write better code dude')
    }
  }

  // NOTE refactored ⚙️
  async getMonsters(gameName) {
    try {
      await monstersService.getMonsters(gameName)
      Pop.success('Got the monsters!')
    } catch (error) {
      console.error('COULD NOT GET MONSTERS FROM API', error)
      Pop.error(error, 'SOMETHING WENT WRONG', 'try refreshing your page, or write better code dude')
    }
  }

  // NOTE draw function has not changed
  drawMonsters() {
    const monsters = AppState.monsters
    let monstersContent = ''
    monsters.forEach(monster => monstersContent += monster.cardHTMLTemplate)
    const monstersElem = document.getElementById('monster-cards')
    monstersElem.innerHTML = monstersContent
  }
}