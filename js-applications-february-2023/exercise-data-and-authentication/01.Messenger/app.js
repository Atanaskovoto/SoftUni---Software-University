function attachEvents() {
    const sendBtn = document.getElementById('submit');
    const refreshBtn = document.getElementById('refresh');
    const authorText = document.getElementsByName('author');
    const contentText = document.getElementsByName('content');
    const textArea = document.getElementById('messages');

    const baseUrl = 'http://localhost:3030/jsonstore/messenger';

    sendBtn.addEventListener('click', () => {
        fetch(baseUrl, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                author: authorText[0].value,
                content: contentText[0].value,
            })
        })
            // .then(res => res.json())
            // .then(data => {
            //     // localStorage.setItem(`${data.author}_id`, data._id);
            // })
            .catch(err => console.log(err));
    });

    refreshBtn.addEventListener('click', () => {
        fetch(baseUrl)
            .then(res => res.json())
            .then(data => {
                const result = [];
                for (const key in data) {
                    result.push(`${data[key].author}: ${data[key].content}`);
                }
                textArea.textContent = result.join('\n');
            })
            .catch(err => console.log(err));
    });
}

attachEvents();