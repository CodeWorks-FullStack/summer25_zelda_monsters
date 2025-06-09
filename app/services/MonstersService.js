import { AppState } from "../AppState.js";
import { Monster } from "../models/Monster.js";

class MonstersService {

  // NOTE we can use the `async` modifier for a function or method so that we can then use the `await` keyword within said function
  async getTearsOfTheKingdomMonsters() {
    // NOTE await will pause the code on this line and wait for a `Promise` to resolve or reject
    // NOTE we can use the `fetch` API from javascript to make network requests in javascript. `fetch` will return a Promise that will resolve if the request is successful (usually a 200 error code) or reject if unsuccessful (usually a 400/500 error code)
    const response = await fetch('https://botw-compendium.herokuapp.com/api/v3/compendium/category/monsters?game=totk')

    // NOTE if the request was rejected
    if (response.status != 200) {
      // NOTE triggers the `catch` in the controller
      throw new Error("COULD NOT GET THOSE DANG MONSTERS")
    }

    // NOTE .json is a method that converts the body of the response into JSON so we can use it in our javascript code. This also returns a Promise so make sure you await this! 
    const json = await response.json()

    // NOTE always look at the json in your console so you can figure out which pieces of the response you want to save to your application
    console.log('response from Monsters API', json);

    // NOTE there will not always be a data property on the json response, this is something that is determined by the API itself
    console.log('array of data from Monsters API', json.data);

    // NOTE map is an array method that will convert the contents of the array into new values, and returns a brand new array of the converted data
    // [ 1, 2, 3 ].map(num => num.toString()) => [ '1', '2', '3' ]
    // [ 1, 2, 3 ].map(num => num * 2) => [ 2, 4, 6 ]
    // NOTE data coming in from an API will always come in as POJOs (plain old javascript objects). We can use map to convert the pojos into our own class model
    const monsters = json.data.map(pojo => new Monster(pojo))
    // console.log('MONSTERS', monsters);

    AppState.monsters = monsters // 💂!!!
    // console.log(AppState.monsters);

  }

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

  async getMonsters(gameName) {
    const response = await fetch(`https://botw-compendium.herokuapp.com/api/v3/compendium/category/monsters?game=${gameName}`)

    if (response.status != 200) {
      throw new Error("COULD NOT GET THOSE DANG MONSTERS")
    }

    const json = await response.json()
    const monsters = json.data.map(pojo => new Monster(pojo))

    AppState.monsters = monsters // 💂!!!
  }
}

export const monstersService = new MonstersService()