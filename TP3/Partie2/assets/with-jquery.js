$(() => {
  /**
   * State variables
   */
  let isSelectionMode = true;
  let selectedCountry = null;
  const countries = {
    france: ["Grenoble", "Lyon", "Marseille", "Lile"],
    allemagne: ["Berlin", "Munich", "Dortmund", "Dresde"],
    espagne: ["Saint sebastian", "Milan", "Madrid", "Bilbao"],
    hongrie: ["Budapest", "Baja", "Ajka", "Kalocsa"]
  };

  /**
   * Processors
   */
  const processAddingMode = enteredValue => {
    const listContainer = $("#cities-list");

    const doesAlreadyExists = countries[selectedCountry].find(
      element => element === enteredValue
    );

    if (!doesAlreadyExists) {
      listContainer.append(`<li>${enteredValue}</li>`);
      countries[selectedCountry].push(enteredValue);
    }
  };

  const processSelectionMode = (enteredValue, country) => {
    if (!country) return alert("Je ne trouve pas de pays contenant ce nom...");

    const otherCitiesFromCountry = countries[country].reduce((acc, current) => {
      if (current !== enteredValue) acc.push(current);

      return acc;
    }, []);

    const cityContainer = $("#cities-container");
    console.log(cityContainer);
    const builtListString = otherCitiesFromCountry
      .map(city => {
        return `<li>${city}</li>`;
      })
      .join("\n");

    cityContainer.append(`<ul id="cities-list">${builtListString}</ul>`);
    selectedCountry = country;
    isSelectionMode = false;

    $("button")
      .first()
      .text("Ajouter une destination");
    $("#welcome-to").text(`Bienvenue en ${selectedCountry}`);
  };

  /**
   * Listener
   */
  $("form")[0].addEventListener("submit", event => {
    event.preventDefault();

    const enteredValue = document.getElementById("city").value;

    const country = Object.keys(countries).reduce((acc, currentKey) => {
      if (acc === null) {
        if (countries[currentKey].indexOf(enteredValue) !== -1) {
          acc = currentKey;
        }
      }
      return acc;
    }, null);

    if (isSelectionMode) return processSelectionMode(enteredValue, country);
    return processAddingMode(enteredValue);
  });
});
