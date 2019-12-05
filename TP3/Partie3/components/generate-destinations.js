const destinationsData = [
  {
    country: "Londres",
    circuitDescription:
      "Visite du big ben, place marchande, repas jour et nuit compris",
    price: 440,
    imageURI: "londres.webp"
  },
  {
    country: "Istanbul",
    circuitDescription:
      "Visite de la mosquée, place marchande, repas jour et nuit compris",
    price: 540,
    imageURI: "istanbul.jpg"
  },
  {
    country: "Russie",
    circuitDescription:
      "Visite de Varsovie, place marchande, repas jour et nuit compris",
    price: 880,
    imageURI: "russie.jpg"
  },
  {
    country: "Croatie",
    circuitDescription: "Plage, place marchande, repas jour et nuit compris",
    price: 440,
    imageURI: "croatie.webp"
  }
];

$(() => {
  generateDestinations();
});

const generateDestinations = () => {
  const destinations = destinationsData.map(
    ({ country, circuitDescription, price, imageURI }, i) => {
      return new Destination(country, circuitDescription, price, imageURI, i);
    }
  );

  const tableDataContainer = $("#table-data-container");

  destinations.forEach(destination => {
    tableDataContainer.append(destination.getTableRow());
  });

  onAddOrRemoveDestination();
};

const addDestination = ({ country, circuitDescription, price, imageURI }) => {
  destinationsData.push({
    country,
    circuitDescription,
    price,
    imageURI
  });

  const addedDestination = new Destination(
    country,
    circuitDescription,
    price,
    imageURI,
    destinationsData.length - 1
  );
  const tableDataContainer = $("#table-data-container");
  tableDataContainer.append(addedDestination.getTableRow());
  onAddOrRemoveDestination();
};

const removeDestination = index => {
  destinationsData.splice(index, 1);

  const tableDataContainer = $("#table-data-container");
  tableDataContainer.html("");

  generateDestinations();
};

const editDestination = ({
  selectedIndex,
  countryValue,
  circuitDescriptionValue,
  priceValue,
  imageURIValue
}) => {
  console.log("test");
};
