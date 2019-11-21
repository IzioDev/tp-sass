window.addEventListener("load", () => {
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
    const listContainer = document.getElementById("cities-list");

    const doesAlreadyExists = countries[selectedCountry].find(
      element => element === enteredValue
    );

    if (!doesAlreadyExists) {
      const newCityElement = document.createElement("li");
      newCityElement.textContent = enteredValue;

      listContainer.appendChild(newCityElement);
      countries[selectedCountry].push(enteredValue);
    }
  };

  const processSelectionMode = (enteredValue, country) => {
    if (!country) return alert("Je ne trouve pas de pays contenant ce nom...");

    const otherCitiesFromCountry = countries[country].reduce((acc, current) => {
      if (current !== enteredValue) acc.push(current);

      return acc;
    }, []);

    const cityContainer = document.getElementById("cities-container");
    cityContainer.innerHTML = "";

    const listContainer = document.createElement("ul");
    listContainer.id = "cities-list";

    otherCitiesFromCountry.map(city => {
      const cityElement = document.createElement("li");
      cityElement.textContent = city;

      listContainer.appendChild(cityElement);
    });

    cityContainer.appendChild(listContainer);
    selectedCountry = country;
    isSelectionMode = false;

    document.getElementsByTagName("button").item(0).textContent =
      "Ajouter une destination";

    document.getElementById(
      "welcome-to"
    ).textContent = `Bienvenue en ${selectedCountry}`;
  };

  /**
   * Listener
   */
  document
    .getElementsByTagName("form")
    .item(0)
    .addEventListener("submit", event => {
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
