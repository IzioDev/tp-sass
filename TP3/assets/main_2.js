// Exercice 2.

window.addEventListener("load", _ => {
  const countries = {
    france: ["Grenoble", "Lyon", "Marseille", "Lile"],
    allemagne: ["Berlin", "Munich", "Dortmund", "Dresde"],
    espagne: ["Saint sebastian", "Milan", "Madrid", "Bilbao"],
    hongrie: ["Budapest", "Baja", "Ajka", "Kalocsa"]
  };

  document
    .getElementsByTagName("form")
    .item(0)
    .addEventListener("submit", event => {
      const enteredValue = document.getElementById("city").value;

      const country = Object.keys(countries).reduce((acc, currentKey) => {
        if (acc === null) {
          if (countries[currentKey].indexOf(enteredValue) !== -1) {
            acc = currentKey;
          }
        }
        return acc;
      }, null);

      if (country) {
        window.alert(`Bienvenue en ${country}!`);
      } else {
        event.preventDefault();
        window.alert(`La ville n'a pas de pays reconnu!`);
      }
    });
});
