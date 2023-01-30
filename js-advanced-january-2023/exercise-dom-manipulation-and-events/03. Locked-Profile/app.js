function lockedProfile() {
    const main = document.getElementById('main');
    main.addEventListener('click', showMore);

    function showMore(event) {
        const unlocked = event.target.parentElement.children[4];

        if (event.target.tagName == 'BUTTON' && unlocked.checked) {
            if (event.target.textContent == 'Show more') {
                event.target.textContent = 'Hide it'
                event.target.parentElement.children[9].style.display = 'inline-block';
            } else {
                event.target.textContent = 'Show more';
                event.target.parentElement.children[9].style.display = '';
            }
        }
    }
}