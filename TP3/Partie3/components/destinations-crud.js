$(() => {
  let isCreationMode = true;
  let selectedIndex = null;
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
  countryValue,
  circuitDescriptionValue,
  priceValue,
  imageURIValue
) =>
  isCreationMode
    ? editDestination({
        selectedIndex,
        countryValue,
        circuitDescriptionValue,
        priceValue,
        imageURIValue
      })
    : addDestination({
        country: countryValue,
        circuitDescription: circuitDescriptionValue,
        price: priceValue,
        imageURI: imageURIValue
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
  removeDestination(index);
};

const areFormValuesNotEmpty = (...vals) =>
  vals.filter(val => val).length === vals.length;
