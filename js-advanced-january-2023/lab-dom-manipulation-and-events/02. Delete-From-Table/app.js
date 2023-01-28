function deleteByEmail() {
    const text = document.querySelector('input[name = email]').value;
    const email = Array.from(document.querySelectorAll('tbody tr'));
    const result = document.getElementById('result');
    let deleted = false;

    for (const el of email) {
        const col = el.children[1].textContent;
        if (col == text) {
            el.remove();
            deleted = true;
        }
    }

    if (deleted) {
        result.textContent = 'Deleted.';
    } else {
        result.textContent = 'Not found.';
    }
}