class MonstersService {
  async getMonsters() {
    const response = await fetch('https://botw-compendium.herokuapp.com/api/v3/compendium/category/monsters?game=totk')

    if (response.status != 200) {
      throw new Error("COULD NOT GET THOSE DANG MONSTERS")
    }

    const json = await response.json()
    console.log('response from Monsters API', json.data);
  }
}

export const monstersService = new MonstersService()