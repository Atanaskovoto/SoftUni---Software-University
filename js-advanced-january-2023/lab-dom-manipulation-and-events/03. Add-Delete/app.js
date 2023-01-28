function addItem() {
   let input = document.getElementById('newItemText');
    const li = document.createElement('li');
    li.textContent = input.value;
    const btn = document.createElement('a');
    btn.href = '#';
    btn.textContent = '[Delete]';
    li.appendChild(btn);

    btn.addEventListener('click', deleteEmail);
    function deleteEmail() {
        li.remove();
    }
    document.getElementById('items').appendChild(li);
    input.value = '';
}