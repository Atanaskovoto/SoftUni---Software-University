function create(words) {
   const content = document.getElementById('content');

   for (const paragraph of words) {
      const div = document.createElement('div');
      const p = document.createElement('p');
      p.textContent = paragraph;
      p.style.display = 'none';
      div.appendChild(p);
      content.appendChild(div);
   }

   content.addEventListener('click', (event) => {
      event.target.children[0].style.display = 'block';
   });
}