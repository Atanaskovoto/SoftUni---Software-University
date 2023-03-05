const baseUrl = 'http://localhost:3030/jsonstore/collections/students';

const formElement = document.getElementById('form');
const tbodyElement = document.getElementsByTagName('tbody')[0];

fetch(baseUrl)
    .then(res => res.json())
    .then(data => {
        const students = Object.values(data);
        students.forEach(student => {
            const trElement = document.createElement('tr');
            tbodyElement.appendChild(trElement);
            const tdFirstName = document.createElement('td');
            tdFirstName.textContent = student.firstName;
            trElement.appendChild(tdFirstName);
            const tdLastName = document.createElement('td');
            tdLastName.textContent = student.lastName;
            trElement.appendChild(tdLastName);
            const tdFacultyNumber = document.createElement('td');
            tdFacultyNumber.textContent = student.facultyNumber;
            trElement.appendChild(tdFacultyNumber);
            const tdGrade = document.createElement('td');
            tdGrade.textContent = student.grade;
            trElement.appendChild(tdGrade);
        });
    })
    .catch(err => console.log(err));

formElement.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(formElement);

    if (isValid()) {
        fetch(baseUrl, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                firstName: formData.get('firstName'),
                lastName: formData.get('lastName'),
                facultyNumber: formData.get('facultyNumber'),
                grade: formData.get('grade')
            })
        })
            .then(res => res.json())
            .then(student => {
                const trElement = document.createElement('tr');
                tbodyElement.appendChild(trElement);
                const tdFirstName = document.createElement('td');
                tdFirstName.textContent = student.firstName;
                trElement.appendChild(tdFirstName);
                const tdLastName = document.createElement('td');
                tdLastName.textContent = student.lastName;
                trElement.appendChild(tdLastName);
                const tdFacultyNumber = document.createElement('td');
                tdFacultyNumber.textContent = student.facultyNumber;
                trElement.appendChild(tdFacultyNumber);
                const tdGrade = document.createElement('td');
                tdGrade.textContent = student.grade;
                trElement.appendChild(tdGrade);
            })
            .catch(err => console.log(err));
    }

    function isValid() {
        isOk = true;
        for (const value of formData.values()) {
            if (value == '') {
                isOk = false;
            }
        }
        return isOk;
    }
});
