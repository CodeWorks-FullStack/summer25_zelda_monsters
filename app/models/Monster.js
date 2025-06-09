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
    return /*html*/`
    <div class="col-md-6">
      <div class="card">
        <img src="https://botw-compendium.herokuapp.com/api/v3/compendium/entry/water_octorok/image?game=totk"
          class="card-img-top" alt="water octorok">
        <div class="card-body">
          <div class="d-flex gap-3">
            <p class="card-title fs-5 fw-bold">${this.name}</p>
            <div class="fs-3" title="DLC monster">
              <span class="mdi mdi-cash-100"></span>
              <span class="mdi mdi-download"></span>
            </div>
          </div>
          <p class="card-text">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta nam itaque necessitatibus nostrum
            dolorem aperiam fugit dolor, est beatae voluptate.
          </p>
          <div>
            <b>Locations</b>
            <ul>
              <li>The lake</li>
              <li>The desert</li>
            </ul>
          </div>
          <div>
            <b>Loot Drops</b>
            <ul>
              <li>tentacle</li>
              <li>eyeball</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    `
  }
}