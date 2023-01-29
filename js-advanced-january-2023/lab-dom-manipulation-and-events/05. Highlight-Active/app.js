function focused() {
    const allInputs = Array.from(document.querySelectorAll('input'));

    for (const input of allInputs) {
        input.addEventListener('focus', () => {
            input.parentElement.className = 'focused';
        });

        input.addEventListener('blur', () => {
            input.parentElement.className = '';
        })

    }
}