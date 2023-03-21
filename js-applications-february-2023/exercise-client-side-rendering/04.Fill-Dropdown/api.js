import { render } from "../../../node_modules/lit-html/lit-html.js";
import { dropMenuTemplate } from "./templates.js";

const form = document.querySelector('form');
const menu = document.getElementById('menu');
const url = 'http://localhost:3030/jsonstore/advanced/dropdown';


// Solution with fetch-then syntax:
// fetch(url)
//     .then(res => res.json())
//     .then(users => { render(dropMenuTemplate(users), menu) })
//     .catch(er => console.log(er));

export async function getTowns() {
    try {
        const res = await fetch(url);

        return await res.json();
    } catch (error) {
        alert(error)
    }
}

render(dropMenuTemplate(await getTowns()), menu);

export async function postTowns() {
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

            render(dropMenuTemplate(await getTowns()), menu);
        } catch (error) {
            alert(error);
        }
    }
}