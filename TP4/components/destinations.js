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

const getDestinationFromIndex = index => destinationsData[index];

const updateDestination = (index, data) => {
  destinationsData[index] = data;
};
