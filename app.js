const players = [
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
  }
];

// Guardar solo si no existen
if (!localStorage.getItem("players")) {
  localStorage.setItem("players", JSON.stringify(players));
}

