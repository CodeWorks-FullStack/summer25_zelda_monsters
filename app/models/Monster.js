export class Monster {
  // NOTE data objects are coming from the API that we reaching out to, make sure you look at your console to grab all of the values we care about
  constructor(data) {
    this.commonLocations = data.common_locations
    this.description = data.description
    this.isDLC = data.dlc
    this.lootDrops = data.drops
    this.id = data.id
    this.imgUrl = data.image
    this.name = data.name
  }
}