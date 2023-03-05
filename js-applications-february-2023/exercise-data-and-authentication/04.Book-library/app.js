const baseUrl = 'http://localhost:3030/jsonstore/collections/books';
const loadBtn = document.getElementById('loadBooks');
const tbodyElement = document.querySelector('tbody');
const formElement = document.querySelector('form');
const formButton = document.querySelector('form button');
const formTitle = document.querySelector('form h3');

let id = ''

loadBtn.addEventListener('click', () => {
    tbodyElement.innerHTML = '';
    localStorage.clear();
    sessionStorage.clear();
    fetch(baseUrl)
        .then(res => res.json())
        .then(data => {
            const booksInfo = Object.entries(data);
            booksInfo.forEach(el => {
                const [id, book] = el;
                sessionStorage.setItem(book.title, id);

                const trElement = document.createElement('tr');
                tbodyElement.appendChild(trElement);
                const tdTitle = document.createElement('td');
                tdTitle.textContent = book.title;
                trElement.appendChild(tdTitle);
                const tdAuthor = document.createElement('td');
                tdAuthor.textContent = book.author;
                trElement.appendChild(tdAuthor);

                const editBtn = document.createElement('button');
                editBtn.setAttribute('name', 'edit');
                editBtn.textContent = 'Edit';
                trElement.appendChild(editBtn);

                const deleteBtn = document.createElement('button');
                deleteBtn.setAttribute('name', 'delete');
                deleteBtn.textContent = 'Delete';
                trElement.appendChild(deleteBtn);
            });
        })
        .catch(err => console.log(err));
});


window.addEventListener('click', (e) => {
    if (e.target.name == 'edit') {
        formButton.textContent = 'Save';
        formTitle.textContent = 'EditFORM';
        id = e.target.parentNode.children[0].textContent
        document.querySelectorAll('form input')[0].value = e.target.parentNode.children[0].textContent;
        document.querySelectorAll('form input')[1].value = e.target.parentNode.children[1].textContent;
    }
});

window.addEventListener('click', (e) => {
    if (e.target.name == 'delete') {
        fetch(`${baseUrl}/${sessionStorage.getItem(e.target.parentNode.children[0].textContent)}`, {
            method: 'DELETE'
        })

    }
});

formButton.addEventListener('click', (e) => {
    e.preventDefault();
    const formData = new FormData(formElement);


    function isValid() {
        isOk = true;
        for (const value of formData.values()) {
            if (value == '') {
                isOk = false;
            }
        }
        return isOk;
    }


    if (isValid()) {
        if (formButton.textContent == 'Save') {
            fetch(`${baseUrl}/${sessionStorage.getItem(id)}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({
                    author: formData.get('author'),
                    title: formData.get('title'),
                })
            })
            formButton.textContent = 'Submit';
            formTitle.textContent = 'FORM';
        } else if (formButton.textContent == 'Submit') {
            fetch(baseUrl, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({
                    author: formData.get('author'),
                    title: formData.get('title'),
                })
            })
        }
        document.querySelectorAll('form input')[0].value = '';
        document.querySelectorAll('form input')[1].value = '';
    }
});
