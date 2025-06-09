import { MonstersController } from "./controllers/MonstersController.js"

class App {
  monstersController = new MonstersController()
}

window['app'] = new App()


