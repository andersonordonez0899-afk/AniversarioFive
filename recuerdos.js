const memories = [
  {
    image: "recuerdos/1.jpg",
    title: "Nuestro primer día",
  },
  {
    image: "recuerdos/2..jpg",
    title: "En el marco de doña Ana",
  },
  {
    image: "recuerdos/2.jpg",
    title: "Una vez que fuimos al McDonalds",
  },
  {
    image: "recuerdos/3.jpeg",
    title: "La cartulina para un Chunin",
  },
  {
    image: "recuerdos/4.jpg",
    title: "Un viaje... loquito",
  },
  {
    image: "recuerdos/5.jpg",
    title: "Vimos a los Guns N' Roses",
  },
  {
    image: "recuerdos//6.jpg",
    title: "BB en Medallo mor",
  },
  {
    image: "recuerdos/8.jpg",
    title: "Una ensalada de frutas pre cumpleaños",
  },
  {
    image: "recuerdos/9.jpg",
    title: "Estabamos en el Zoo",
  },
  {
    image: "recuerdos/10.jpeg",
    title: "La mejor Psico en Bogotá DC",
  },
  {
    image: "recuerdos/11.jpg",
    title: "Tomando una foto a la visitada en la nevera",
  },
  {
    image: "recuerdos/13.jpg",
    title: "Entrando a la tierrita pues",
  },
  {
    image: "recuerdos/14.jpg",
    title: "El caballo del tio",
  },
  {
    image: "recuerdos/15.jpg",
    title: "Carnavales muy polvorosos",
  },
  {
    image: "recuerdos/16.jpg",
    title: "En las Planadas viendo un hermoso paisaje",
  },
  {
    image: "recuerdos/17.png",
    title: "Graduando",
  },
  {
    image: "recuerdos/18.jpg",
    title: "Besito en un mirado con vacas",
  },
  {
    image: "recuerdos/19.jpg",
    title: "Playitaaaaa",
  },
  {
    image: "recuerdos/20.jpg",
    title: "Primero en tu casita",
  },
  {
    image: "recuerdos/21.png",
    title: "Cumpleaños en Fonseca",
  },
  {
    image: "recuerdos/22.jpg",
    title: "Sexy en Valledupar",
  },
  {
    image: "recuerdos/23.jpg",
    title: "Esperando comida, mucha hambre",
  },
  {
    image: "recuerdos/24.jpg",
    title: "Una rica comida en el calor de La Guajira",
  },
  {
    image: "recuerdos/25.jpg",
    title: "Comiendo rico",
  },
  {
    image: "recuerdos/26.jpg",
    title: "Con la comida en la mano",
  },
  {
    image: "recuerdos/27.jpg",
    title: "Lindos",
  },
  {
    image: "recuerdos/28.jpg",
    title: "Mucha recochita con los juegos",
  },
  {
    image: "recuerdos/29.jpg",
    title: "Green Day",
  },
  {
    image: "recuerdos/30.jpg",
    title: "Casual",
  },
  {
    image: "recuerdos/31.jpg",
    title: "Exploradores por naturaleza",
  },
  {
    image: "recuerdos/32.jpg",
    title: "LAS PIZZASSSS",
  },
  {
    image: "recuerdos/33.jpg",
    title: "Santander rumbo a Popayán",
  },
  {
    image: "recuerdos/34.jpg",
    title: "Alumbradoooo",
  },
  {
    image: "recuerdos/35.jpg",
    title: "Bolitos",
  },
  {
    image: "recuerdos/36.jpg",
    title: "Cumpleaños Feliz",
  },
  {
    image: "recuerdos/37.jpg",
    title: "Domingo",
  },
  {
    image: "recuerdos/38.png",
    title: "Ochenteros",
  },
  {
    image: "recuerdos/39.jpg",
    title: "Disciplina",
  },
];
let current = 0;

function renderMemory() {
  document.getElementById("photo").src = memories[current].image;

  document.getElementById("title").textContent = memories[current].title;

  document.getElementById("description").textContent =
    memories[current].description;
}
document.getElementById("next").addEventListener("click", () => {
  current++;

  if (current >= memories.length) {
    current = 0;
  }

  renderMemory();
});

document.getElementById("prev").addEventListener("click", () => {
  current--;

  if (current < 0) {
    current = memories.length - 1;
  }

  renderMemory();
});

renderMemory();
