let isCreationMode = true;
let selectedIndex = null;

$(() => {
  $("#creation-form").submit(event => {
    event.preventDefault();

    const countryValue = $("#field-country").val();
    const circuitDescriptionValue = $("#field-circuitDescription").val();
    const priceValue = $("#field-price").val();
    const imageURIValue = $("#field-imageURI").val();

    const areFormValuesValid = areFormValuesNotEmpty(
      countryValue,
      circuitDescriptionValue,
      priceValue,
      imageURIValue
    );

    const isPriceValueAcceptable = priceValue > 0;

    if (areFormValuesValid && isPriceValueAcceptable) {
      processAction(
        isCreationMode,
        selectedIndex,
        countryValue,
        circuitDescriptionValue,
        priceValue,
        imageURIValue
      );
    } else {
      // Error message
    }
  });
  $("button.delete").click(handleButtonDeleteClickEvent);
  $("button.edit").click(handleButtonEditClickEvent);
});

const processAction = (
  isCreationMode,
  selectedIndex,
  country,
  circuitDescription,
  price,
  imageURI
) =>
  !isCreationMode
    ? editDestination({
        selectedIndex,
        country,
        circuitDescription,
        price,
        imageURI
      })
    : addDestination({
        country,
        circuitDescription,
        price,
        imageURI
      });

const onAddOrRemoveDestination = () => {
  $("button.delete")
    .off()
    .click(handleButtonDeleteClickEvent);

  $("button.edit")
    .off()
    .click(handleButtonEditClickEvent);
};

const handleButtonDeleteClickEvent = function(event) {
  const _thisElement = $(this);
  const index = _thisElement.attr("index");
  removeDestination(index);
};

const handleButtonEditClickEvent = function(event) {
  const _thisElement = $(this);
  const index = _thisElement.attr("index");

  // Update state variables
  isCreationMode = false;
  selectedIndex = index;

  // Retrieve destination value based on index
  const destination = getDestinationFromIndex(index);

  // Fill form with current values
  const countryField = $("#field-country");
  const descriptionField = $("#field-circuitDescription");
  const priceField = $("#field-price");
  const imageURIField = $("#field-imageURI");

  countryField.val(destination.country);
  descriptionField.val(destination.circuitDescription);
  priceField.val(destination.price);
  imageURIField.val(destination.imageURI);

  // Change the submit button to edit
  $("#submitDestination").text("Modifier");

  // Scroll to the input
  countryField.focus();
};

const onEditSubmit = () => {
  // Change the submit button to edit
  $("#submitDestination").text("Ajouter");
  isCreationMode = true;

  // Reset from value
  const countryField = $("#field-country");
  const descriptionField = $("#field-circuitDescription");
  const priceField = $("#field-price");
  const imageURIField = $("#field-imageURI");

  countryField.val("");
  descriptionField.val("");
  priceField.val("");
  imageURIField.val("");
};

const areFormValuesNotEmpty = (...vals) =>
  vals.filter(val => val).length === vals.length;
