import { postTowns } from "./api.js";

const form = document.querySelector('form');

form.addEventListener('submit', addItem);

async function addItem(event) {
    event.preventDefault();
    postTowns();
}