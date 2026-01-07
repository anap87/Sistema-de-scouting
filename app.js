const players = [
  // ===== WOMEN =====
  {
    id: 1,
    gender: "women",
    name: "María López",
    position: "Midfielder",
    age: 18,
    nationality: "Ecuador",
    height: "165 cm",
    weight: "58 kg",
    status: "Available",
    type: "Freshman",
    gpa: "3.8",
    mentions: "Team captain · National finalist · Leadership",
    sprint5: "1.05 s",
    sprint10: "1.85 s",
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: 2,
    gender: "women",
    name: "Sofía Andrade",
    position: "Winger",
    age: 17,
    nationality: "Colombia",
    height: "160 cm",
    weight: "55 kg",
    status: "Available",
    type: "Junior",
    gpa: "3.7",
    mentions: "Explosive speed · One-on-one specialist",
    sprint5: "1.02 s",
    sprint10: "1.80 s",
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: 3,
    gender: "women",
    name: "Valentina Ruiz",
    position: "Goalkeeper",
    age: 18,
    nationality: "Chile",
    height: "170 cm",
    weight: "62 kg",
    status: "Available",
    type: "Freshman",
    gpa: "3.9",
    mentions: "Quick reflexes · Shot stopper",
    sprint5: "1.10 s",
    sprint10: "1.95 s",
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },

  // ===== MEN =====
  {
    id: 4,
    gender: "men",
    name: "Lucas Fernández",
    position: "Center Back",
    age: 19,
    nationality: "Argentina",
    height: "182 cm",
    weight: "75 kg",
    status: "Available",
    type: "Freshman",
    gpa: "3.6",
    mentions: "Strong aerial game · Defensive leader",
    sprint5: "1.00 s",
    sprint10: "1.78 s",
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: 5,
    gender: "men",
    name: "Andrés Molina",
    position: "Attacking Midfielder",
    age: 18,
    nationality: "Mexico",
    height: "175 cm",
    weight: "68 kg",
    status: "Available",
    type: "Freshman",
    gpa: "3.5",
    mentions: "Playmaker · Vision · Through balls",
    sprint5: "1.03 s",
    sprint10: "1.82 s",
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: 6,
    gender: "men",
    name: "Diego Ríos",
    position: "Striker",
    age: 19,
    nationality: "Uruguay",
    height: "178 cm",
    weight: "72 kg",
    status: "Available",
    type: "Sophomore",
    gpa: "3.4",
    mentions: "Clinical finisher · High pressing",
    sprint5: "0.98 s",
    sprint10: "1.75 s",
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  }
];

/* ===============================
   GUARDAR JUGADORES UNA SOLA VEZ
================================ */

if (!localStorage.getItem("players")) {
  localStorage.setItem("players", JSON.stringify(players));
}

/* ===============================
   FUNCIÓN PARA ABRIR PERFIL
   (USADA EN MEN Y WOMEN)
================================ */

function openPlayer(playerId) {
  localStorage.setItem("selectedPlayerId", playerId);
  window.location.href = "player.html";
}
