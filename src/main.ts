import './style.css'
import { name, age, isValid, templateString } from './bases/01-types';

const app = document.querySelector<HTMLDivElement>("#app")!;
app.innerHTML = `
  <p>hola ${name} mi edad es ${age} y es verdadero ? ${isValid}</p>
  <p>${templateString}</p>
`;
