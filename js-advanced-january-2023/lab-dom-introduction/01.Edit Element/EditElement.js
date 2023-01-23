function editElement(reference, match, replacer) {
    const text = reference.textContent;
    const result = text
        .split(match)
        .join(replacer);
    reference.textContent = result;
}