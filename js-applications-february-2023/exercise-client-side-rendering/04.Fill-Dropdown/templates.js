import { html } from "../../../node_modules/lit-html/lit-html.js";

export const dropMenuTemplate = (data) => html`
${Object.values(data).map(user => html`<option value="${user._id}">${user.text}</option>`)}
`;