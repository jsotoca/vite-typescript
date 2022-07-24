import './style.css'
import { name, age, isValid, templateString } from './bases/01-types';
import { pokemonids } from './bases/02-object';
const app = document.querySelector<HTMLDivElement>("#app")!;
app.innerHTML = `
  <p>hola ${name} mi edad es ${age} y es verdadero ? ${isValid}</p>
  <p>${templateString}</p>
  <p>${pokemonids.join(" ")}</p>
`;
