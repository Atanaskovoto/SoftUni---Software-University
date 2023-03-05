function attachEvents() {
    const phoneBookData = document.getElementById('phonebook');
    const loadBtn = document.getElementById('btnLoad');
    const createBtn = document.getElementById('btnCreate');
    const personInput = document.getElementById('person');
    const phoneInput = document.getElementById('phone');

    const baseUrl = 'http://localhost:3030/jsonstore/phonebook';

    loadBtn.addEventListener('click', () => {
        phoneBookData.innerHTML = '';
        fetch(baseUrl)
            .then(res => res.json())
            .then(data => {
                const result = Object.values(data);
                localStorage.clear();

                result.forEach(el => {
                    const liElement = document.createElement('li');
                    liElement.textContent = `${el.person}: ${el.phone}`;
                    phoneBookData.appendChild(liElement);
                    const deleteBtn = document.createElement('button');
                    deleteBtn.textContent = 'Delete';
                    deleteBtn.setAttribute('name', 'delete');
                    liElement.appendChild(deleteBtn);

                    localStorage.setItem(`${el.person}`, el._id);
                });
            })
            .catch(err => console.log(err));
    });

    phoneBookData.addEventListener('click', (event) => {
        if (event.target.name == 'delete') {
            const key = event.target.parentNode.textContent.split(': ')[0];

            fetch(`${baseUrl}/${localStorage.getItem(key)}`, {
                method: 'DELETE',
            });

            phoneBookData.removeChild(event.target.parentNode);
        }
    });

    createBtn.addEventListener('click', () => {
        if (!personInput.value == '' && !phoneInput.value == '') {
            fetch(baseUrl, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({
                    person: personInput.value,
                    phone: phoneInput.value,
                })
            })
                .then(res => res.json())
                .then(data => {
                    const liElement = document.createElement('li');
                    liElement.textContent = `${data.person}: ${data.phone}`;
                    phoneBookData.appendChild(liElement);
                    const deleteBtn = document.createElement('button');
                    deleteBtn.textContent = 'Delete';
                    deleteBtn.setAttribute('name', 'delete');
                    liElement.appendChild(deleteBtn);

                    localStorage.setItem(`${data.person}`, data._id);
                })
                .catch(err => console.log(err));
            personInput.value = '';
            phoneInput.value = '';

        }
    });

}

attachEvents();