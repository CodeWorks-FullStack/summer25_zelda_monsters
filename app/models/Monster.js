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

  get cardHTMLTemplate() {
    return `
    <div class="col-md-4 mb-3">
      <div class="card">
        <img src="${this.imgUrl}"
          class="card-img-top" alt="${this.name}">
        <div class="card-body">
          <div class="d-flex gap-3">
            <p class="card-title fs-5 fw-bold text-capitalize">${this.name}</p>
            <div class="fs-3 ${this.isDLC ? '' : 'd-none'}" title="DLC monster">
              <span class="mdi mdi-cash-100"></span>
              <span class="mdi mdi-download"></span>
            </div>
          </div>
          <p class="card-text">${this.description}</p>
          <div>
            <b>Locations</b>
            <ul>
              ${this.locationListItems}
            </ul>
          </div>
          <div>
            <b>Loot Drops</b>
            <ul>
             ${this.dropListItems}
            </ul>
          </div>
        </div>
      </div>
    </div>
    `
  }

  get locationListItems() {
    if (this.commonLocations == null) {
      return 'No common locations'
    }


    let content = ''
    this.commonLocations.forEach(location => content += `<li>${location}</li>`)
    return content
  }
  get dropListItems() {
    if (this.lootDrops == null) {
      return 'No drops'
    }


    let content = ''
    this.lootDrops.forEach(drop => content += `<li>${drop}</li>`)
    return content
  }
}