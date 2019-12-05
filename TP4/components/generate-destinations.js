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
  country,
  circuitDescription,
  price,
  imageURI
}) => {
  // Change the submit button to add
  $("#submitDestination").text("Ajouter");

  updateDestination(selectedIndex, {
    country,
    circuitDescription,
    price,
    imageURI
  });

  const tableDataContainer = $("#table-data-container");
  tableDataContainer.html("");

  generateDestinations();
  onAddOrRemoveDestination();

  onEditSubmit();
};
