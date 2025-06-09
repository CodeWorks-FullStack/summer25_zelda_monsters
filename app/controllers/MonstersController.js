import { AppState } from "../AppState.js";
import { monstersService } from "../services/MonstersService.js";
import { Pop } from "../utils/Pop.js";

export class MonstersController {
  constructor() {
    console.log('MONSTERS CONTROLLER IS READY 👽🧌👹👻');
    AppState.on('monsters', this.drawMonsters)
    // this.getTearsOfTheKingdomMonsters()
    this.getMonsters('totk')
  }

  async getTearsOfTheKingdomMonsters() {
    try {
      await monstersService.getTearsOfTheKingdomMonsters()
      Pop.success('Got the monsters!')
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

  drawMonsters() {
    const monsters = AppState.monsters
    let monstersContent = ''
    monsters.forEach(monster => monstersContent += monster.cardHTMLTemplate)
    const monstersElem = document.getElementById('monster-cards')
    monstersElem.innerHTML = monstersContent
  }
}