const getRandomValue = () => {
  let cardValue = Math.ceil(Math.random() * 13 + 1);
  return cardValue;
};

const getRandomSuit = () => {
  let suit;
  let suitNumber = Math.floor(Math.random() * 4);
  if (suitNumber === 0) {
    suit = 'diamonds';
  } else if (suitNumber === 1) {
    suit = 'hearts';
  } else if (suitNumber === 2) {
    suit = 'clovers';
  } else {
    suit = 'spades';
  }
  return suit;
};

const getRandomCard = () => {
  let value = getRandomValue();
  let suit = getRandomSuit();
  let currentCard = { value: value, suit: suit };
  currentCard.value = value;
  currentCard.suit = suit;
  if (currentCard.value < 11) {
    currentCard.face = currentCard.value;
  } else if (currentCard.value === 11) {
    currentCard.face = 'Jack';
  } else if (currentCard.value === 12) {
    currentCard.face = 'Queen';
  } else if (currentCard.value === 13) {
    currentCard.face = 'King';
  } else if (currentCard.value === 14) {
    currentCard.face = 'Ace';
  }

  return currentCard;
};

const userChoice = () => {
  let userCard = prompt('Elija mayor o menor.').toLowerCase();
  while (userCard !== 'mayor' && userCard !== 'menor') {
    userCard = prompt('Debe elegir mayor o menor.').toLowerCase();
  }
  return userCard;
};

export function game() {
  alert(`Bienvenido a ISDI Casino!
  El sistema le mostrará una carta
  apueste si la próxima carta será mayor o menor.
  El juego acaba tras 11 rondas`);
  let rounds = 0;
  let score = 0;
  let continuePlaying = true;
  while (rounds <= 10 && continuePlaying === true) {
    const showCard = getRandomCard();
    alert(`Su carta es ${showCard.face} of ${showCard.suit}`);
    let userBet = userChoice();
    let flipCard = getRandomCard();
    while (flipCard.value === showCard.value) {
      flipCard = getRandomCard();
    }
    if (userBet === 'mayor' && flipCard.value > showCard.value) {
      alert(`La nueva carta es ${flipCard.face} of ${flipCard.suit}`);
      alert('Has ganado!');
      score += 1;
      rounds += 1;
    } else if (userBet === 'menor' && flipCard.value < showCard.value) {
      alert(`La nueva carta es ${flipCard.face} of ${flipCard.suit}`);
      alert('Has ganado!');
      score += 1;
      rounds += 1;
    } else {
      alert(`La nueva carta es ${flipCard.face} of ${flipCard.suit}`);
      alert('Has perdido!');
      rounds += 1;
    }
    continuePlaying = confirm('¿Quieres continuar jugando?');
  }
  if (rounds >= 10) {
    alert(`Fin del juego
 rondas: ${rounds}
 puntuación: ${score} `);
  }
}
