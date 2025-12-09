export const projects = [
  {
    title: "CLINEX",
    description:
      "Sistema distribuido de gestión clínica con soporte para  múltiples sedes, diseñado para optimizar la administración de pacientes, turnos y profesionales  como ejercicio de arquitectura limpia y buenas prácticas en backend. ",
    technologies: ["Node.js", "Express", "Redis", "MySQL", "JWT", "Jest", "Clean Architecture", "Docker"],
    repo: "https://github.com/candiath/clinex",
  },
  {
    title: "Landing Page Kinecandia",
    description:
      "Landing page para una kinesióloga y fisiatra, que facilita el contacto con  potenciales pacientes y provee una presentación clara de servicios, perfil y testimonios.",
    technologies: ["Javascript", "CSS", "HTML", "Netlify"],
    site: "https://kinecandia.netlify.app/",
    repo: "https://github.com/candiath/kine-landing",
  },
  // {
  //   title: "Teslo Shop",
  //   description:
  //     "FrontEnd para un E-commerce inspirado en los estilos de diseño de Tesla con funcionalidades de búsqueda, filtrado y administración de productos, implementado con React y TypeScript.",
  //   technologies: ["TypeScript", "React", "Vercel"],
  //   repo: "https://github.com/Nath-s-React-Courses/07-teslo-shop",
  // },
]

interface MiniApp {
  title: string;
  description: string;
  technologies: string[];
  repo?: string;
  site?: string;
  image?: string;
}

const baseUrl = "https://pub-d0c86d895d3c4cd0a01395f46da20762.r2.dev/"

export const miniApps: MiniApp[] = [
  
  {
    title: "Buscador de gifs con Giphy API",
    description:
      "Aplicación web que consume una API de Giphy para mostrar imágenes animadas relacionadas con términos de búsqueda, utilizando React para la interfaz de usuario e implementando técnicas de caché para mejorar el rendimiento y optimizar el consumo de la API.",
    technologies: ["JavaScript", "React", "CSS", ],
    repo: "",
    site: "https://nath-s-giphy-search.netlify.app/",
    image: `${baseUrl}giphy-search.netlify.app.png`,
  },
  {
    title: "TODO app",
    description:
    "Aplicación web para gestionar tareas pendientes, utilizando Javascript para la interfaz de usuario.",
    technologies: ["JavaScript", "CSS"],
    repo: "https://github.com/candiath/05-todo-app",
    site: "https://naths-todo-app.netlify.app/",
    image: `${baseUrl}todo-app.netlify.app.png`,
  },
  {
    title: "BlackJack",
    description:
    "Simple juego de BlackJack implementado en JavaScript, donde el jugador puede jugar contra la computadora siguiendo las reglas clásicas del juego.",
    technologies: ["JavaScript", "CSS", "HTML"],
    repo: "https://github.com/candiath/js-vite-blackjack",
    site: "https://naths-blackjack.netlify.app/",
    image: `${baseUrl}blackjack.netlify.app.png`,
  },
]