function createGame(player1, hour, player2) {
  return `
    <li>
      <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}">
      <strong>${hour}</strong>
      <img src="./assets/icon-${player2}.svg" alt="Bandeira da ${player2}">
    </li>
  `
}

function createCard(date, day, games) {
  return `
    <div class="card">
      <h2>${date} <span>${day}</span></h2>
      <ul>
        ${games}
      </ul>
    </div>
  `
}

document.querySelector("#cards").innerHTML = 
  createCard(
    "24/11", 
    "quinta", 
    createGame("brazil", "16:00", "serbia"))

    +
  createCard(
    "26/11",
    "sábado",
    createGame("argentina", "16:00", "mexico")
  )  
    +
  createCard(
    "27/11", 
    "domingo", 
    createGame("spain", "16:00", "germany"))

    +
  createCard(
    "28/11",
    "segunda",
    createGame("brazil", "13:00", "switzerland") +
    createGame("portugal", "16:00", "uruguay")
  )
    +
  createCard(
    "01/12",
    "quinta",
    createGame("croatia", "12:00", "belgium")
  )
    +
 createCard(
    "02/12", 
    "sexta", 
    createGame("south_korea", "12:00", "portugal") 
    +
    createGame("cameroon", "16:00", "brazil")) 
