import { html, render } from "../../../node_modules/lit-html/lit-html.js";

const form = document.querySelector('form');
const root = document.getElementById('root');

form.addEventListener('submit', addTowns);


function addTowns(event) {
    event.preventDefault();
    const formData = new FormData(form);

    const towns = formData.get('towns').split(', ');
    form.reset();

    const townsTemplate = () => html`
    <ul>
        ${towns.map(town => html`<li>${town}</li>`)}
    </ul>
     `;
    render(townsTemplate(), root);

}