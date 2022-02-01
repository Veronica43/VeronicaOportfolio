import form from "../components/../img/form.png";
import gifs from "../components/../img/funnyGifs.png";
import Portfolio from "../components/../img/portfolio.png";
import todoapp from "../components/../img/todoapp.png";

export const projects = [
  {
    title: "React form validation",
    description:
      " How to handle and validate React form inputs using different ways. Handling forms in React using useState, useRef and FormData.",
    image: form,

    url: "https://form-01.netlify.app",
    code: "https://github.com/Veronica43/Register-form.git",
    id: 0,
  },
  {
    title: "GifExpert App",
    description:
      "Using GIPHY api and React js and search functionality so that users can either retrieve trending gifs or search for specific keywords .",
    image: gifs,

    url: " https://veronica43.github.io/react-gifexpert-App/",
    code: "https://github.com/Veronica43/react-gifexpert-App.git",
    id: 1,
  },
  {
    title: "To do App",
    description:
      "To do App using ReactJs,where the user will be able to add, remove, edit, and mark complete/cross out the todo items.  .",
    image: todoapp,

    url: " https://notetodo-app.netlify.app",
    code: "https://github.com/Veronica43/Googler-App.git",
    id: 3,
  },
  {
    title: "Portfolio",
    description:
      "Personal portfolio minimalistic, using ReactJs,React-Router-Dom,where you can see my projects and a little about me,also a functional contact form",
    image: Portfolio,

    url: "https://veronicaortega-portfolio.vercel.app/",
    code: "https://github.com/Veronica43/VeronicaOportfolio.git",
    id: 2,
  },
];
