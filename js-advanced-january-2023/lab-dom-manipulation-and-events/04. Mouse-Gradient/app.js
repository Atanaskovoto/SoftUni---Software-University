function attachGradientEvents() {
    document.getElementById('gradient').addEventListener('mousemove', hover);
    function hover(event) {
        document.getElementById('result').textContent = Math.floor(event.offsetX / 300 * 100) + '%';
    }
}