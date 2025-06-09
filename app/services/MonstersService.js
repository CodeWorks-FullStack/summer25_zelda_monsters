import { AppState } from "../AppState.js";
import { Monster } from "../models/Monster.js";

class MonstersService {
  async getBreathOfTheWildMonsters() {
    const response = await fetch('https://botw-compendium.herokuapp.com/api/v3/compendium/category/monsters?game=botw')

    if (response.status != 200) {
      throw new Error("COULD NOT GET THOSE DANG MONSTERS")
    }

    const json = await response.json()
    console.log('response from Monsters API', json.data);
    const monsters = json.data.map(pojo => new Monster(pojo))
    // console.log('MONSTERS', monsters);

    AppState.monsters = monsters // 💂!!!
    // console.log(AppState.monsters);
  }
  async getTearsOfTheKingdomMonsters() {
    const response = await fetch('https://botw-compendium.herokuapp.com/api/v3/compendium/category/monsters?game=totk')

    if (response.status != 200) {
      throw new Error("COULD NOT GET THOSE DANG MONSTERS")
    }

    const json = await response.json()
    console.log('response from Monsters API', json.data);
    const monsters = json.data.map(pojo => new Monster(pojo))
    // console.log('MONSTERS', monsters);

    AppState.monsters = monsters // 💂!!!
    // console.log(AppState.monsters);

  }
}

export const monstersService = new MonstersService()