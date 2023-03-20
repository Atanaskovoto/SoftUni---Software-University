import { html, render } from "../../../node_modules/lit-html/lit-html.js";
import { cats } from "./catSeeder.js";

const rootAllCats = document.getElementById('allCats');

const catsTemplate = (cats) => html`
<ul>
    ${cats.map(cat => html`
    <li>
        <img src="./images/${cat.imageLocation}.jpg">
        <div class="info">
            <button class="showBtn">Show status code</button>
            <div class="status" style="display: none" id="${cat.id}">
                <h4>Status Code: ${cat.statusCode}</h4>
                <p>Continue</p>
            </div>
        </div>
    </li>`)}
</ul>
`;

render(catsTemplate(cats), rootAllCats);

rootAllCats.addEventListener('click', (event) => {

    if (event.target.className == 'showBtn') {
       
        if (event.target.textContent == 'Show status code') {
            event.target.textContent = 'Hide status code';
            event.target.parentNode.children[1].style.display = 'block';
        } else  {
            event.target.textContent = 'Show status code';
            event.target.parentNode.children[1].style.display = 'none';
        }
    }
});
