const deck = ["A♠", "2♠", "3♠", "4♠", "5♠", "6♠", "7♠", "8♠", "9♠", "10♠", "J♠", "Q♠", "K♠",
              "A♥", "2♥", "3♥", "4♥", "5♥", "6♥", "7♥", "8♥", "9♥", "10♥", "J♥", "Q♥", "K♥"];

function shuffleDeck() {
    return deck.sort(() => Math.random() - 0.5);
}

function startGame() {
    const board = document.getElementById("game-board");
    board.innerHTML = "";
    const shuffledDeck = shuffleDeck();

    shuffledDeck.forEach(card => {
        let cardDiv = document.createElement("div");
        cardDiv.classList.add("card");
        cardDiv.textContent = "?"; // Carte cachée
        cardDiv.onclick = () => cardDiv.textContent = card; // Affiche la carte au clic
        board.appendChild(cardDiv);
    });
}
