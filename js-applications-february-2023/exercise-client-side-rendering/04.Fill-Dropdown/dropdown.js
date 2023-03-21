import { html, render } from "../../../node_modules/lit-html/lit-html.js";

const url = 'http://localhost:3030/jsonstore/advanced/dropdown';
const menu = document.getElementById('menu');
const form = document.querySelector('form');

const dropMenuTemplate = (data) => html`
${Object.values(data).map(user => html`<option value="${user._id}">${user.text}</option>`)}
`;

// Solution with fetch-then syntax:
// fetch(url)
//     .then(res => res.json())
//     .then(users => { render(dropMenuTemplate(users), menu) })
//     .catch(er => console.log(er));

async function getTowns() {
    try {
        const res = await fetch(url);
        const data = await res.json();

        return render(dropMenuTemplate(data), menu);
    } catch (error) {
        alert(error)
    }
}

getTowns();

form.addEventListener('submit', addItem);

async function addItem(event) {
    event.preventDefault();
    const formData = new FormData(form);
    const text = formData.get('input')
    form.reset();

    if (text) {
        try {
            await fetch(url, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({
                    text
                })
            });

            getTowns();

        } catch (error) {
            alert(error);
        }

    }
}