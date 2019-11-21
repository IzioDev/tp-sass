// Exercice 1.

const getMessageToPrintFromUserInput = (userGuess, numberToGuess) => {
  if (userGuess !== -1) {
    if (userGuess < numberToGuess) {
      return "C'est plus grand!";
    } else if (userGuess > numberToGuess) {
      return "C'est plus petit!";
    }
  }
  return "Devniez le nombre entre 1 et 10";
};

const addLeftTryNumberFromMessage = (message, leftTryNumber) => {
  return `${message} | Nombre d'essai restant(s) : ${leftTryNumber}`;
};

document.addEventListener("DOMContentLoaded", _ => {
  const numberToGuess = Math.ceil(Math.random() * 10);
  let userGuess = -1;
  let leftTryNumber = 3;

  while (
    isNaN(userGuess) ||
    (userGuess !== numberToGuess && leftTryNumber > 0)
  ) {
    const messageToPrint = addLeftTryNumberFromMessage(
      getMessageToPrintFromUserInput(userGuess, numberToGuess),
      leftTryNumber
    );

    const userOutput = window.prompt(messageToPrint, "1");
    userGuess = parseInt(userOutput, 10);

    leftTryNumber--;
  }

  if (userGuess === numberToGuess) window.alert("Bravo!");
  else window.alert("T'es nul");
});
