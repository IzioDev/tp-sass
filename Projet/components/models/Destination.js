class Destination {
  constructor(country, circuitDescription, price, imageURI, index) {
    this.country = country;
    this.circuitDescription = circuitDescription;
    this.price = price;
    this.imageURI = imageURI;
    this.index = index;
  }

  getTableRow() {
    return `
        <div class="col-lg-4 col-md-6">
          <div class="card mb-3 block-center" style="width: 18rem; height: 460px;">
            <img class="card-img-top" src="${this.imageURI}" alt="${this.country}" />
            <div class="card-body">
              <h5 class="card-title">${this.country}</h5>
              <p class="card-text">
                ${this.circuitDescription}
              </p>
              <a href="#" class="user-action btn btn-primary">Réserver</a>
              <div class="mt-2">
                <button class="admin-action edit btn btn-warning" index="${this.index}">Modifier</button>
                <button class="admin-action delete btn btn-danger" index="${this.index}">Supprimer</button>
              </div>
            </div>
          </div>
        </div>
    `;
  }
}