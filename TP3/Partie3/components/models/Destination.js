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
        <tr>
            <td>
                <p><strong>${this.country}</strong></p>
                <img src="${this.imageURI}" />
            </td>
            <td>
                ${this.circuitDescription}
            </td>
            <td>
                ${this.price} €
            </td>
            <td>
                <button>Réserver</button>
                <button class="edit" index="${this.index}">Modifier</button>
                <button class="delete" index="${this.index}">Supprimer</button>
            </td>
        </tr>
    `;
  }
}
