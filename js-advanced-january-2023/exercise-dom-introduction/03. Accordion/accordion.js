function toggle() {
    let button = document.getElementsByClassName('button')[0];
    button.textContent = button.textContent == 'More' ? 'Less' : 'More';

    document.getElementById('extra').style.display = document.getElementById('extra').style.display == 'none' || document.getElementById('extra').style.display == '' ? 'block' : 'none';
}