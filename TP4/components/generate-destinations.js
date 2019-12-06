$(() => {
  generateDestinations();

  const storedUser = localStorage.getItem("user");

  if (storedUser) {
    if (storedUser === "admin") {
      $(".admin-action").show();
    }

    if (storedUser === "user" || storedUser === "admin") {
      $(".user-action").show();
    }
  }
});

const generateDestinations = () => {
  const destinations = destinationsData.map(
    ({ country, circuitDescription, price, imageURI }, i) => {
      return new Destination(country, circuitDescription, price, imageURI, i);
    }
  );

  const divDataContainer = $("#destinations-container");

  destinations.forEach(destination => {
    divDataContainer.append(destination.getTableRow());
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
  const divDataContainer = $("#destinations-container");
  divDataContainer.append(addedDestination.getTableRow());
  onAddOrRemoveDestination();
};

const removeDestination = index => {
  destinationsData.splice(index, 1);

  const divDataContainer = $("#destinations-container");
  divDataContainer.html("");

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
